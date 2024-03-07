import cv2
import numpy as np

def square_generator(z_r, z_s, side_length, rx, ry, rz, x, y, res_img, dim_img, center_square, gen_img):

    # Calculate FOV from side length
    fov = np.degrees(2 * np.arctan(side_length / (2 * z_r)))
    print("FOV calculated from side length:", fov)

    # Generate corner points based on field of view
    half_fov = np.radians(fov/2)
    print("half fov:", half_fov)

    print("Corner points based on field of view:")
    p1 = [-z_r * np.tan(half_fov), z_r * np.tan(half_fov), z_r]
    p2 = [z_r * np.tan(half_fov), z_r * np.tan(half_fov), z_r]
    p3 = [-z_r * np.tan(half_fov), -z_r * np.tan(half_fov), z_r]
    p4 = [z_r * np.tan(half_fov), -z_r * np.tan(half_fov), z_r]
    print("p1:", p1)
    print("p2:", p2)
    print("p3:", p3)
    print("p4:", p4)

    # Convert angles to radians for rotation
    alpha = np.radians(rx)
    beta = np.radians(ry)
    gamma = np.radians(rz)
    print("\nAngles to radians for rotation:")
    print("Alpha:", alpha)
    print("Beta:", beta)
    print("Gamma:", gamma)

    # Rotational matrices
    Rz = np.array([[np.cos(gamma), -np.sin(gamma), 0], [np.sin(gamma), np.cos(gamma), 0], [0, 0, 1]])
    Ry = np.array([[np.cos(beta), 0, np.sin(beta)], [0, 1, 0], [-np.sin(beta), 0, np.cos(beta)]])
    Rx = np.array([[1, 0, 0], [0, np.cos(alpha), -np.sin(alpha)], [0, np.sin(alpha), np.cos(alpha)]])
    R = np.matmul(Rz, np.matmul(Ry, Rx))  # Combined rotation matrix
    print("\nRotational matrices:")
    print("Rz:")
    print(Rz)
    print("Ry:")
    print(Ry)
    print("Rx:")
    print(Rx)
    print("Combined rotation matrix R:")
    print(R)

    print("Corner points with rotation:")
    p1r = np.matmul(R, p1)
    p2r = np.matmul(R, p2)
    p3r = np.matmul(R, p3)
    p4r = np.matmul(R, p4)
    print("p1r:", p1r)
    print("p2r:", p2r)
    print("p3r:", p3r)
    print("p4r:", p4r)

    # %% create line equations from origin and rotated corner points
    # lines will be treated as vectors. Vector equation is: r(P) = r(P1) + lambda*(r(P2)-r(P1))
    # determine lambda as z_s/z_r as a scaling factor
    lambda1 = z_s / p1r[2]
    lambda2 = z_s / p2r[2]
    lambda3 = z_s / p3r[2]
    lambda4 = z_s / p4r[2]

    # using P1 as origin to make equation simpler: r(P) = [0,0,0] + lambda*r(P2) = lambda*r(P2)
    p1s = lambda1 * p1r
    p2s = lambda2 * p2r
    p3s = lambda3 * p3r
    p4s = lambda4 * p4r

    # Translate the corner points
    print("translate corner points:")
    p1s = np.array([p1s[0] + x, p1s[1] + y, p1s[2]]) / res_img
    p2s = np.array([p2s[0] + x, p2s[1] + y, p2s[2]]) / res_img
    p3s = np.array([p3s[0] + x, p3s[1] + y, p3s[2]]) / res_img
    p4s = np.array([p4s[0] + x, p4s[1] + y, p4s[2]]) / res_img
    print("p1s:", p1s)
    print("p2s:", p2s)
    print("p3s:", p3s)
    print("p4s:", p4s)

    # Assign scaled points to square corner positions
    corners = [p1s[0:2], p2s[0:2], p3s[0:2], p4s[0:2]]
    #print("p1s[0:2]:","p2s[0:2]:","p3s[0:2]:","p4s[0:2]:", p1s, p2s,p3s,p4s)

    # Center square to image center based on its centroid if required
    if center_square:
        centroid = [np.mean([corners[i][0] for i in range(0, len(corners), 1)]),
                    np.mean([corners[i][1] for i in range(0, len(corners), 1)])]
        corners = [corners[i] - centroid for i in range(0, len(corners), 1)]

    # Generate the image
    if gen_img:
        image = np.zeros((dim_img[1], dim_img[0]), dtype="uint8")
        corners_img = [[int(dim_img[0] / 2 + corners[i][0]), int(dim_img[1] / 2 - corners[i][1])] for i in
                       range(0, len(corners), 1)]
        for i in range(0, len(corners_img), 1):
            if corners_img[i][0] < 0:
                corners_img[i][0] = 0
            elif corners_img[i][0] >= dim_img[0]:
                corners_img[i][0] = dim_img[0] - 1
            if corners_img[i][1] < 0:
                corners_img[i][1] = 0
            elif corners_img[i][1] >= dim_img[1]:
                corners_img[i][1] = dim_img[1] - 1
        image = cv2.line(image, corners_img[0], corners_img[1], (255, 255, 255), 1)
        image = cv2.line(image, corners_img[0], corners_img[2], (255, 255, 255), 1)
        image = cv2.line(image, corners_img[2], corners_img[3], (255, 255, 255), 1)
        image = cv2.line(image, corners_img[3], corners_img[1], (255, 255, 255), 1)
        for i in range(0, len(image), 1):
            l1 = np.where(image[i] == 255)[0]
            l2 = np.where(image[i] == 255)[0]
            if len(l1) > 0:
                image[i, np.min(l1):np.max(l1)] = 255
            if len(l2) > 0:
                image[i, np.min(l2):np.max(l2)] = 255
    else:
        image = []

    return corners, image

# Parameters for square generation
z_r = 200 # Position of the generated square. Unit is [mm].
z_s = 200 # Position of the screen where the square will be viewed. Unit is [mm].
side_length = 1000  # Side length of the square. Unit is [mm].
rx = 0 # Rotation of the square around the x-axis. Unit is [°].
ry = 90 # Rotation of the square around the y-axis. Unit is [°].
rz = 0  # Rotation of the square around the z-axis. Unit is [°].
x = 0 # Translation of the square along the x-axis. Unit is [mm].
y = 0 # Translation of the square along the y-axis. Unit is [mm].
z = 0 # translation of the rectangle along the z-axis. Unit is [mm]
res_img = 0.1125 #Resolution of one pixel. Unit is [mm/pixel].
dim_img = (10000,8000) # Resolution of the image that will be generated from the screen. Provided as (horizontal, vertical).
center_square = False  # Flag to center square to image center based on its centroid.
gen_img = True  # Flag to set if image should be generated or not.

# Generate square and image
corners, image = square_generator(z_r, z_s, side_length, rx, ry, rz, x, y, res_img, dim_img, center_square, gen_img)

# Save the image
cv2.imwrite("square_image.jpg", image)


# Save the corner points, x, y, rx, ry, and rz in a text file
with open("corner_points_and_params.txt", "w") as file:

    file.write(f"p1s: {corners[0]}, p2s: {corners[1]}, p3s: {corners[2]}, p4s: {corners[3]}\n")
    file.write(f"x: {x}, y: {y}, rx: {rx}, ry: {ry}, rz: {rz}")

# Display the image
cv2.imshow("Square Image", image)
cv2.waitKey(0)
cv2.destroyAllWindows()
