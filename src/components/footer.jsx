import React from 'react'

export default function Footer() {
  return (
    <>
        <footer class="footer-main-tag">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                  <div class="mb-6 md:mb-0">
                      <a href="#" class="flex items-center">
                          <img src={require('../logowhite.png')} class="h-11 me-3" alt="Logo" />
                      </a>
                      <div className='flex flex-col justify-center'>
                        <p className='text-white mt-4 text-lg'>Manage life easily.</p>
                        <p className='text-white text-lg'>Everywhere, every time.</p>
                      </div>
                  </div>
                  <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                      <div>
                          <h2 class="mb-6 text-sm font-semibold text-white uppercase">Support</h2>
                          <ul class="text-gray-500 font-medium">
                              <li class="mb-4">
                                  <a href="https://flowbite.com/" class="hover:underline">FAQ</a>
                              </li>
                              <li className='mb-4'>
                                  <a href="https://tailwindcss.com/" class="hover:underline">Privacy Policy</a>
                              </li>
                              <li>
                                  <a href="https://tailwindcss.com/" class="hover:underline">Terms & Conditions</a>
                              </li>
                          </ul>
                      </div>
                      <div>
                          <h2 class="mb-6 text-sm font-semibold text-white uppercase">Product</h2>
                          <ul class="text-gray-500 font-medium">
                              <li class="mb-4">
                                  <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Pricing</a>
                              </li>
                              <li className='mb-4'>
                                  <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Customers</a>
                              </li>
                              <li>
                                  <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Products</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <hr class="my-6 border-gray-100 sm:mx-auto lg:my-8" />
              <div class="sm:flex sm:items-center sm:justify-between">
                  <span class="text-sm text-gray-500 sm:text-center">© 2024 <a href="#" class="hover:underline">AI Legal Chatbot</a>. All Rights Reserved.</span>
                  <div class="flex mt-4 sm:justify-center sm:mt-0">
                      <a href="#" class="text-gray-500 hover:text-white">
                          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 8 19">
                                <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                            </svg>
                          <span class="sr-only">Facebook page</span>
                      </a>
                      <a href="#" class="text-gray-500 hover:text-white ms-5">
                          <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 20 17">
                            <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                        </svg>
                          <span class="sr-only">Twitter page</span>
                      </a>
                      <a href="#" class="text-gray-500 hover:text-white ms-5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"><path fill="white" d="M128 23.064c34.177 0 38.225.13 51.722.745c12.48.57 19.258 2.655 23.769 4.408c5.974 2.322 10.238 5.096 14.717 9.575c4.48 4.479 7.253 8.743 9.575 14.717c1.753 4.511 3.838 11.289 4.408 23.768c.615 13.498.745 17.546.745 51.723c0 34.178-.13 38.226-.745 51.723c-.57 12.48-2.655 19.257-4.408 23.768c-2.322 5.974-5.096 10.239-9.575 14.718c-4.479 4.479-8.743 7.253-14.717 9.574c-4.511 1.753-11.289 3.839-23.769 4.408c-13.495.616-17.543.746-51.722.746c-34.18 0-38.228-.13-51.723-.746c-12.48-.57-19.257-2.655-23.768-4.408c-5.974-2.321-10.239-5.095-14.718-9.574c-4.479-4.48-7.253-8.744-9.574-14.718c-1.753-4.51-3.839-11.288-4.408-23.768c-.616-13.497-.746-17.545-.746-51.723c0-34.177.13-38.225.746-51.722c.57-12.48 2.655-19.258 4.408-23.769c2.321-5.974 5.095-10.238 9.574-14.717c4.48-4.48 8.744-7.253 14.718-9.575c4.51-1.753 11.288-3.838 23.768-4.408c13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95c-8.418 3.271-15.556 7.648-22.672 14.764C14.367 28.6 9.991 35.738 6.72 44.155C3.555 52.297 1.392 61.602.77 75.226C.147 88.878 0 93.237 0 128c0 34.763.147 39.122.77 52.774c.622 13.625 2.785 22.93 5.95 31.071c3.27 8.417 7.647 15.556 14.763 22.672c7.116 7.116 14.254 11.492 22.672 14.763c8.142 3.165 17.446 5.328 31.07 5.95c13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95c8.418-3.27 15.556-7.647 22.672-14.763c7.116-7.116 11.493-14.254 14.764-22.672c3.164-8.142 5.328-17.446 5.95-31.07c.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07c-3.271-8.418-7.648-15.556-14.764-22.672C227.4 14.368 220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0m0 62.27c-36.302 0-65.73 29.43-65.73 65.73c0 36.302 29.428 65.73 65.73 65.73c36.301 0 65.73-29.428 65.73-65.73c0-36.301-29.429-65.73-65.73-65.73m0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667m83.686-110.994c0 8.484-6.876 15.36-15.36 15.36c-8.483 0-15.36-6.876-15.36-15.36c0-8.483 6.877-15.36 15.36-15.36c8.484 0 15.36 6.877 15.36 15.36"/></svg>
                        </a>
                       <a href="#" class="text-gray-500 hover:text-white ms-5">
                       <svg xmlns="http://www.w3.org/2000/svg" width="1.3em" height="1em" viewBox="0 0 256 180"><path fill="white" d="M250.346 28.075A32.18 32.18 0 0 0 227.69 5.418C207.824 0 127.87 0 127.87 0S47.912.164 28.046 5.582A32.18 32.18 0 0 0 5.39 28.24c-6.009 35.298-8.34 89.084.165 122.97a32.18 32.18 0 0 0 22.656 22.657c19.866 5.418 99.822 5.418 99.822 5.418s79.955 0 99.82-5.418a32.18 32.18 0 0 0 22.657-22.657c6.338-35.348 8.291-89.1-.164-123.134"/><path fill="black" d="m102.421 128.06l66.328-38.418l-66.328-38.418z"/></svg>
                       </a>
                  </div>
              </div>
            </div>
        </footer>
    </>
  )
}
