import { Archivo_Black } from "next/font/google";
import Skill from "./skill";
import Project from "./project";

const archivo = Archivo_Black({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export default function Description() {
  return (
    <div className="w-full md:w-[50%] lg: w-[60%]">
      <div className="bg-neutral-100 dark:bg-neutral-900 text-amber-950 dark:text-amber-100 rounded rounded-md p-5 shadow-lg/10 flex flex-col ">
        <div className="flex flex-col gap-5">
          <div className={"text-2xl " + archivo.className}>
            <h2>About</h2>
            <hr />
          </div>
          <div className="text-neutral-700 dark:text-neutral-300">
            <p>
              Hello there! My name is Caleb, and I&apos;m a recent graduate of
              California State University - Fullerton with a{" "}
              <span className="text-amber-700 dark:text-amber-200">
                B.S. in Computer Science
              </span>
              . At my time at CSUF I focused on{" "}
              <span className="text-amber-700 dark:text-amber-200">
                full-stack web development
              </span>
              , resulting in the development of NextNest. My main tech stack is{" "}
              <span className="text-amber-700 dark:text-amber-200">
                SERN - SQL, Express.js, React, and Node.js
              </span>
              , but I have recently been experimenting with technologies such as
              Next.js and Ruby on Rails.
              <br />
              <br />
              Beyond specific tech skills, I specialize in{" "}
              <span className="text-amber-700 dark:text-amber-200">
                engineering E2E Systems
              </span>{" "}
              with a focus on{" "}
              <span className="text-amber-700 dark:text-amber-200">
                automated software testing
              </span>
              . I excell in handling{" "}
              <span className="text-amber-700 dark:text-amber-200">
                Git version management
              </span>{" "}
              and{" "}
              <span className="text-amber-700 dark:text-amber-200">
                teamwork/communication
              </span>{" "}
              in general through my numerous projects.
            </p>
          </div>
          <div className={"text-2xl " + archivo.className}>
            <h2>My Skills</h2>
            <hr />
          </div>
          <div className="flex flex-row flex-wrap justify-around gap-y-3">
            <Skill
              name="TypeScript"
              icon={
                <svg
                  fill="none"
                  height="100%"
                  viewBox="0 0 256 256"
                  width="100%"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect fill="#3178c6" height="256" rx="128" width="256" />
                  <path
                    clipRule="evenodd"
                    d="m140.463 160.712v25.03c4.017 2.086 8.767 3.651 14.25 4.694 5.484 1.043 11.264 1.564 17.34 1.564 5.921 0 11.547-.574 16.876-1.721s10.002-3.037 14.018-5.671c4.016-2.633 7.196-6.075 9.539-10.325s3.514-9.503 3.514-15.761c0-4.537-.669-8.513-2.008-11.929-1.339-3.415-3.27-6.453-5.793-9.112-2.523-2.66-5.548-5.045-9.075-7.157s-7.505-4.107-11.933-5.984c-3.244-1.356-6.153-2.673-8.728-3.95-2.574-1.278-4.762-2.581-6.565-3.911-1.802-1.33-3.192-2.738-4.17-4.224-.979-1.486-1.468-3.168-1.468-5.045 0-1.721.438-3.272 1.313-4.654.876-1.382 2.111-2.5686 3.707-3.5594 1.597-.9908 3.553-1.7599 5.87-2.3075 2.317-.5475 4.892-.8213 7.724-.8213 2.06 0 4.235.1565 6.526.4694 2.292.3128 4.596.7952 6.913 1.447 2.317.6519 4.57 1.4732 6.758 2.4638 2.188.991 4.209 2.138 6.063 3.442v-23.3879c-3.759-1.4601-7.865-2.5422-12.319-3.2461-4.454-.704-9.564-1.056-15.331-1.056-5.87 0-11.431.6388-16.683 1.9164s-9.873 3.2722-13.864 5.9838-7.144 6.1663-9.461 10.3641-3.476 9.2167-3.476 15.0577c0 7.457 2.124 13.818 6.372 19.085s10.697 9.726 19.348 13.376c3.398 1.408 6.565 2.79 9.5 4.146 2.934 1.355 5.47 2.763 7.607 4.223 2.137 1.461 3.823 3.051 5.059 4.772s1.854 3.676 1.854 5.866c0 1.617-.386 3.116-1.159 4.498-.772 1.382-1.943 2.581-3.514 3.598-1.57 1.017-3.527 1.812-5.87 2.386-2.343.573-5.085.86-8.225.86-5.355 0-10.659-.952-15.911-2.855s-10.118-4.758-14.598-8.565zm-42.7525-62.1709h32.2895v-20.5411h-90v20.5411h32.1316v91.4589h25.5789z"
                    fill="#fff"
                    fillRule="evenodd"
                  />
                </svg>
              }
            >
              Experienced in utilizing JavaScript and TypeScript in various
              frameworks to make full-stack web applications
            </Skill>
            <Skill
              name="React"
              icon={
                <svg width="100%" height="100%" viewBox="0 0 1093 977">
                  <g transform="translate(183.79242,-1.1577341)">
                    <path
                      fill="#61dafb"
                      d="m144 1c-20 0-39 5-56 15-21 13-37 34-46 56-11 27-15 57-16 86-1 50 7 99 19 147-22 7-44 14-66 22-36 15-72 32-103 57-22 18-43 41-53 68-9 23-9 48-1 71 7 21 21 40 37 55 20 19 42 34 66 47 38 20 78 35 120 47-12 51-21 103-19 155 1 26 5 53 16 77 8 19 20 37 36 49 16 13 35 20 55 22 22 2 45-2 66-9 24-8 47-20 69-34 35-22 67-49 97-78 30 29 61 55 96 77 29 18 60 34 94 41 21 4 43 4 64-3 18-6 35-17 47-31 15-17 24-38 29-60 7-27 9-55 8-83-2-42-9-84-19-124 46-13 92-30 134-55 27-16 52-35 70-60 15-20 25-43 25-68 0-23-8-46-21-64-18-27-44-47-71-64-42-25-89-43-136-57 13-51 21-104 19-156-1-26-6-53-16-77-8-19-20-37-37-49-16-12-36-19-56-21-21-2-42 2-62 9-25 8-48 21-70 35-34 22-66 49-95 77-32-31-66-59-103-82-28-17-59-32-93-37-8-1-15-2-23-2zm2 47c15 0 29 4 43 9 35 13 65 34 94 57 16 13 32 27 47 42-34 36-64 75-93 115-49 5-99 12-147 23-7-29-13-58-16-87-3-27-3-54 1-80 3-16 7-33 16-47 8-14 21-25 36-29 7-2 13-2 20-2zm435 0c11 0 21 2 31 7 15 8 25 23 31 38 9 22 11 47 11 71 0 44-7 88-18 130-48-11-98-18-147-23-29-40-59-79-93-115 29-28 61-55 96-77 22-13 45-24 70-29 6-1 13-2 19-2zM363 189c23 25 44 51 65 77-43-2-86-2-129 0 20-27 42-53 65-77zm0 123c33 0 67 1 100 4 38 55 71 114 101 174-29 60-62 119-101 174-66 5-133 5-199 0-38-55-72-114-101-174 29-60 63-119 101-174 33-2 67-4 100-4zm-160 10c-23 37-45 74-65 113-13-31-25-63-35-95 33-8 67-13 100-17zm320 0c34 4 67 10 100 18-10 32-22 64-35 96-20-38-42-76-65-113zm-466 29c15 47 33 94 54 139-21 45-39 92-54 139-45-13-89-29-129-54-19-12-38-27-52-46-10-14-16-32-13-49 4-21 19-39 35-53 27-23 59-39 91-53 22-9 45-17 68-23zm611 0c43 12 85 28 123 50 19 11 37 24 51 40 11 12 20 28 21 44 1 16-5 31-14 44-12 17-29 31-46 42-41 27-87 44-134 57-15-47-33-94-54-139 21-45 39-91 54-139zm-80 194c13 31 25 63 35 96-33 8-67 13-100 18 24-37 45-74 65-113zm-450 0c20 39 42 76 65 113-34-4-67-10-100-17 10-32 22-64 35-96zm498 141c10 39 17 78 18 118 1 25-1 50-8 74-5 16-13 32-27 43-13 10-29 13-44 11-24-2-46-11-67-22-41-22-77-53-111-85 33-35 63-72 90-111 1-1 2-4 4-4 49-5 98-12 146-23zm-546 0c49 11 98 18 147 23 29 40 60 79 93 116-30 29-62 56-97 78-22 13-45 24-70 29-16 3-34 2-49-6-15-8-25-23-31-39-8-22-11-46-11-70 0-44 8-87 18-129zm208 27c43 2 86 2 130 0-20 27-42 53-65 78-23-25-44-51-65-77z"
                    />
                    <path
                      fill="#61dafb"
                      d="m354 392c19-2 38 2 55 11 20 11 36 28 44 49 10 24 10 52 0 76-13 33-45 57-80 60-21 2-44-3-62-14-20-12-35-32-42-54-8-24-5-51 6-74 15-30 46-51 79-53z"
                    />
                  </g>
                </svg>
              }
            >
              Proficient in using React.js to create beautiful, dynamic,
              responsive, and functional webpages
            </Skill>
            <Skill
              name="Databases"
              icon={
                <svg width="100%" height="100%" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M13.1371 6.91018C13.4184 6.7695 13.7123 6.59981 14 6.40001V8C14 9.65685 11.3137 11 8 11C4.68629 11 2 9.65685 2 8V6.40001C2.28772 6.59981 2.58158 6.7695 2.86293 6.91018C4.28096 7.61919 6.09998 8 8 8C9.90002 8 11.719 7.61919 13.1371 6.91018Z"
                    className="fill-black dark:fill-white"
                  />
                  <path
                    d="M2 11.4V13C2 14.6569 4.68629 16 8 16C11.3137 16 14 14.6569 14 13V11.4C13.7123 11.5998 13.4184 11.7695 13.1371 11.9102C11.719 12.6192 9.90002 13 8 13C6.09998 13 4.28096 12.6192 2.86293 11.9102C2.58158 11.7695 2.28772 11.5998 2 11.4Z"
                    className="fill-black dark:fill-white"
                  />
                  <path
                    d="M8 0C11.3137 0 14 1.34315 14 3C14 4.65685 11.3137 6 8 6C4.68629 6 2 4.65685 2 3C2 1.34315 4.68629 0 8 0Z"
                    className="fill-black dark:fill-white"
                  />
                </svg>
              }
            >
              Well versed in designing and implementing schemas for relational
              databases with various security needs
            </Skill>
            <Skill
              name="Teamwork"
              icon={
                <svg height="100%" width="100%" viewBox="0 0 512 512">
                  <g>
                    <circle
                      className="fill-neutral-600"
                      cx="398.784"
                      cy="183.234"
                      r="65.636"
                    />
                    <path
                      className="fill-neutral-600"
                      d="M512,394.402v-58.12c0-61.16-66.752-62.28-66.752-62.28h-92.92c0,0-66.752,0.744-66.752,62.28v58.12
		H512z"
                    />
                  </g>
                  <g>
                    <circle
                      className="fill-red-600"
                      cx="113.215"
                      cy="183.244"
                      r="65.636"
                    />
                    <path
                      className="fill-red-600"
                      d="M226.4,394.402v-58.12c0-61.16-66.752-62.28-66.752-62.28H66.752c0,0-66.752,0.744-66.752,62.28
		v58.12H226.4z"
                    />
                  </g>
                </svg>
              }
            >
              Able to effectively communicate with team members and organize
              tasks in agile environments
            </Skill>
            <Skill
              name="Design"
              icon={
                <svg width="100%" height="100%" viewBox="0 0 1024 1024">
                  <path
                    d="M689.1 462.3c10.5 10.5 24.6 16.2 39.5 16.2s29-5.8 39.5-16.2l116.1-115.4c10.5-10.5 16.3-24.4 16.3-39.3 0-14.9-5.8-28.8-16.3-39.3L761 145.9c-21.1-20.9-57.9-20.9-79 0L566 261.3c-10.5 10.5-16.3 24.4-16.3 39.3s5.8 28.8 16.3 39.3l123.1 122.4z m-89.3-167.4l116.1-115.4c2-2 4.4-2.3 5.6-2.3 1.2 0 3.6 0.3 5.6 2.3L850.3 302c2 2 2.3 4.4 2.3 5.6 0 1.2-0.3 3.6-2.3 5.6l-116 115.4c-2 2-4.4 2.3-5.6 2.3-1.2 0-3.6-0.3-5.6-2.3L599.8 306.2c-2-2-2.3-4.4-2.3-5.6s0.3-3.7 2.3-5.7zM316.1 588.4c-21.1-20.9-58-20.9-79 0l-15.3 15.2c-15.3 15.3-31.5 42.4-37.5 63.1l-51.1 174.7c-4.3 14.6-2.4 28.2 5.3 38.4 7 9.3 18.2 14.6 30.7 14.6 5 0 10.3-0.8 15.6-2.5l182.4-56.1c20.6-6.3 47.7-22.6 62.9-37.7l9-8.9c10.5-10.5 16.3-24.4 16.3-39.3 0-14.9-5.8-28.8-16.3-39.3l-123-122.2z m89.2 167.2l-9 8.9c-9.6 9.6-30.2 21.9-43.2 25.9L244 823.9l-41.3-49.5 27.6-94.3c3.8-12.9 15.9-33.3 25.4-42.7l15.3-15.2c2-2 4.4-2.3 5.6-2.3 1.2 0 3.6 0.3 5.6 2.3l123 122.3c2 2 2.3 4.4 2.3 5.6 0.1 1.2-0.2 3.6-2.2 5.5zM324 145.9c-21.1-20.9-57.9-20.9-79 0L121.9 268.3c-10.5 10.5-16.3 24.4-16.3 39.3 0 14.9 5.8 28.8 16.3 39.3l560.2 557c10.5 10.5 24.6 16.2 39.5 16.2 14.9 0 29-5.8 39.5-16.2l123.2-122.5c10.5-10.5 16.3-24.4 16.3-39.3 0-14.9-5.8-28.8-16.3-39.3L324 145.9z m526.3 601.8L727.2 870.2c-2 2-4.4 2.3-5.6 2.3-1.2 0-3.6-0.3-5.6-2.3l-560.2-557c-2-2-2.3-4.4-2.3-5.6 0-1.2 0.3-3.6 2.3-5.6l123.1-122.5c2-2 4.4-2.3 5.6-2.3 1.2 0 3.6 0.3 5.6 2.3l16.7 16.6-57.1 56.9c-9.4 9.3-9.4 24.4 0 33.7 4.7 4.6 10.8 7 16.9 7 6.1 0 12.3-2.3 16.9-7l57.2-56.9 27.8 27.7-24.7 24.6c-9.3 9.3-9.3 24.4 0 33.7 4.7 4.6 10.8 7 16.9 7 6.1 0 12.3-2.3 16.9-7l24.7-24.6 27.8 27.7-57.2 56.9c-9.4 9.3-9.4 24.4 0 33.7 4.7 4.6 10.8 7 16.9 7 6.1 0 12.2-2.3 16.9-7l57.2-56.9 27.9 27.7-24.7 24.6c-9.3 9.3-9.3 24.4 0 33.7 4.7 4.7 10.8 7 16.9 7 6.1 0 12.3-2.3 16.9-7l24.7-24.6 27.9 27.7-57.2 56.9c-9.3 9.3-9.3 24.4 0 33.7 4.7 4.6 10.8 7 16.9 7 6.1 0 12.3-2.3 16.9-7l57.2-56.9 27.9 27.7-24.7 24.6c-9.3 9.3-9.3 24.4 0 33.7 4.7 4.7 10.8 7 16.9 7 6.1 0 12.3-2.3 16.9-7l24.7-24.6 27.8 27.7-57.2 56.9c-9.4 9.3-9.4 24.4 0 33.7 4.7 4.7 10.8 7 16.9 7 6.1 0 12.2-2.3 16.9-7l57.2-56.9 27.8 27.7-24.7 24.6c-9.3 9.3-9.3 24.4 0 33.7 4.7 4.6 10.8 7 16.9 7 6.1 0 12.3-2.3 16.9-7l24.7-24.6 27.9 27.7-57.2 56.9c-9.4 9.3-9.4 24.4 0 33.7 4.7 4.6 10.8 7 16.9 7 6.1 0 12.3-2.3 16.9-7l57.2-56.9 15.9 15.9c2 2 2.3 4.4 2.3 5.6s0.2 3.2-1.8 5.2z"
                    fill="#5C99EE"
                  />
                </svg>
              }
            >
              Knowledgable about the software design and architecture process,
              ensuring high satisfaction
            </Skill>
            <Skill
              name="Testing"
              icon={
                <svg
                  className="fill-black dark:fill-white"
                  width="100%"
                  height="100%"
                  viewBox="0 0 1920 1920"
                >
                  <g fillRule="evenodd">
                    <path
                      d="M0 53h1386.67v342.083c-50.87-14.385-104.54-22.083-160-22.083C902.66 373 640 635.66 640 959.667c0 324.003 262.66 586.663 586.67 586.663 55.46 0 109.13-7.69 160-22.08v342.08H0V53Z"
                      fillRule="nonzero"
                    />
                    <path d="M1226.67 1439.67c113.33 0 217.48-39.28 299.6-104.96l302.37 302.65c20.82 20.84 54.59 20.85 75.42.04 20.84-20.82 20.86-54.59.04-75.43l-302.41-302.68c65.7-82.12 104.98-186.29 104.98-299.623 0-265.097-214.91-480-480-480-265.1 0-480.003 214.903-480.003 480 0 265.093 214.903 480.003 480.003 480.003Zm0-106.67c206.18 0 373.33-167.15 373.33-373.333 0-206.187-167.15-373.334-373.33-373.334-206.19 0-373.337 167.147-373.337 373.334 0 206.183 167.147 373.333 373.337 373.333Z" />
                  </g>
                </svg>
              }
            >
              Passionate about creating robust tests with thoughtful testcases
              using tools such as Selenium
            </Skill>
          </div>
          <div className={"text-2xl " + archivo.className}>
            <h2>Projects</h2>
            <hr />
          </div>
          <div className="flex flex-row flex-wrap justify-around gap-y-3">
            <Project name="Next Nest" link="https://next-nest.net">
              Next Nest was my Senior Capstone project that used a SERN tech
              stack. The main goal was to provide a way for people to find a
              city that meets as many of their needs as possible. This was
              accomplished by both allowing them to take quizzes on their
              preferences and provide results using a cosine similarity model
              and sort through a table of all the cities we had data on. The
              biggest challenges in this project were sourcing the required data
              and managing the tasks by myself.
            </Project>
            <Project
              name="Color Palette Picker"
              link="https://colorpalettepicker.up.railway.app/"
              active={true}
            >
              Color Palette Picker is a client-side React app that allows the
              user to create a color palette file from an image. Different
              applications use different file formats for palettes and
              occasionally make it difficult to create your own. This seeks to
              ease that process. In the future I hope to add more features to
              the picker and add a file conversion page that lets users convert
              between different palette types.
            </Project>
            <Project name="Starship">
              Starship is a TypeScript/Discord.js Discord bot game where players
              can explore space, collect resources, buy pets, and much more. I
              rewrote the original JavaScript version of this bot due to
              low-quality code and structure. It is currently on haitus in favor
              of web development projects.
            </Project>
          </div>
        </div>
      </div>
    </div>
  );
}
