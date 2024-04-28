import AppLayout from "./components/AppLayout";
import { Routes, Route } from "react-router-dom";
import Task from "./components/Task";
import { Toaster } from "react-hot-toast";

function App() {
  console.log("render app..");
  return (
    <AppLayout>
      <Toaster position="top-right" gutter={8} />
      <Routes>
        <Route path="/:projectId" element={<Task />} />
        <Route
          path="/"
          element={
            <div className="flex flex-col items-center justify-center h-full">
             <div className="flex flex-col items-center bg-gray-100 p-8 rounded-lg">
                <img src="./image/welcome.svg" className="w-5/12" alt="" />
                <h1 className="text-lg text-gray-600">
                  KANBAN BOARD
                </h1>
                <p class="leading-relaxed mb-6 text-center ml-auto">
                                                     A kanban board is an agile project management tool designed to help visualize work, limit work-in-progress, and maximize efficiency (or flow). It can help both agile and DevOps teams establish order in their daily work.
                </p>
              </div>
              <section className="flex-grow">
                <div className="container px-5 py-24 mx-auto">
                  <div className="flex flex-wrap -m-4 justify-center">
                    <section class="text-gray-600 body-font">
                      <div class="container px-5 py-24 mx-auto">
                        <h1 class="text-3xl font-medium title-font text-gray-900 mb-12 text-center">
                          Testimonials
                        </h1>
                        <div class="flex flex-wrap -m-4">
                          <div class="p-4 md:w-1/2 w-full">
                            <div class="h-full bg-gray-100 p-8 rounded">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                class="block w-5 h-5 text-gray-400 mb-4"
                                viewBox="0 0 975.036 975.036"
                              >
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                              </svg>
                              <p class="leading-relaxed mb-6">
                              "I've been using the Kanban to-do list app for a while now, and I can't imagine managing my tasks without it. The visual layout of the Kanban board is incredibly intuitive and helps me stay organized like never before. I love how I can easily move tasks between different stages, from 'To-Do' to 'In Progress' to 'Done,' with just a drag and drop. It gives me a clear overview of my workload and progress at a glance. Plus, the ability to add descriptions to each task keeps me on track and ensures nothing slips through the cracks. Thanks to this app, I've become more productive and efficient in managing my tasks and projects."
                              </p>
                              <a class="inline-flex items-center">
                                <img
                                  alt="testimonial"
                                  src="https://dummyimage.com/106x106"
                                  class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                ></img>
                                <span class="flex-grow flex flex-col pl-4">
                                  <span class="title-font font-medium text-gray-900">
                                    Michael N.
                                  </span>
                                  <span class="text-gray-500 text-sm">
                                    UI DEVELOPER
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                          <div class="p-4 md:w-1/2 w-full">
                            <div class="h-full bg-gray-100 p-8 rounded">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                class="block w-5 h-5 text-gray-400 mb-4"
                                viewBox="0 0 975.036 975.036"
                              >
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                              </svg>
                              <p class="leading-relaxed mb-6">
                              "As someone who juggles multiple projects and deadlines daily, finding the right task management tool was crucial for me. Enter the Kanban to-do list app – a game-changer in my productivity journey. What sets this app apart is its simplicity combined with powerful features. I appreciate how easy it is to create new tasks, assign them to specific projects, and prioritize them accordingly. The ability to customize columns based on my workflow allows me to tailor the board to my exact needs. Whether I'm working solo or collaborating with a team, the Kanban board keeps everyone on the same page, fostering seamless communication and coordination. Thanks to this app, I've gained more control over my workload and achieved better work-life balance."
                              </p>
                              <a class="inline-flex items-center">
                                <img
                                  alt="testimonial"
                                  src="https://dummyimage.com/107x107"
                                  class="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                ></img>
                                <span class="flex-grow flex flex-col pl-4">
                                  <span class="title-font font-medium text-gray-900">
                                    Mohammad Anas
                                  </span>
                                  <span class="text-gray-500 text-sm">
                                    DESIGNER
                                  </span>
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>
                  </div>
                </div>
              </section>
              <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                  <footer className="text-gray-600 body-font">
                    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                      <a
                        href="#"
                        className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                        </svg>
                        <span class="ml-3 text-xl">TODALOO</span>
                      </a>
                      <p class="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
                        {" "}
                        App that gets tasks done ✅ —
                        <a
                          href="https://twitter.com/knyttneve"
                          class="text-gray-600 ml-1"
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          @todaloo
                        </a>
                      </p>

                      <a
                        href="https://www.facebook.com/"
                        className="ml-3 text-gray-500"
                      >
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://twitter.com/"
                        className="ml-3 text-gray-500"
                      >
                        <svg
                          fill="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a
                        href="https://www.instagram.com/"
                        className="ml-3 text-gray-500"
                      >
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <rect
                            width="20"
                            height="20"
                            x="2"
                            y="2"
                            rx="5"
                            ry="5"
                          ></rect>
                          <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                        </svg>
                      </a>
                    </div>
                  </footer>
                </div>
              </footer>
            </div>
          }
        />
      </Routes>
    </AppLayout>
  );
}

export default App;
