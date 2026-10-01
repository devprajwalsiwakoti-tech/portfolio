/* =========================================================
   PRAJWAL SIWAKOTI — PORTFOLIO JAVASCRIPT
   ========================================================= */

"use strict";


/* =========================================================
   CURRENT YEAR
   ========================================================= */

document.getElementById("year").textContent =
    new Date().getFullYear();



/* =========================================================
   HEADER + BACK TO TOP
   ========================================================= */

const header =
    document.getElementById("header");

const topBtn =
    document.getElementById("top");


function onScroll() {

    /*
       Add glass effect to header
       after the user starts scrolling.
    */

    header.classList.toggle(
        "scrolled",
        window.scrollY > 30
    );


    /*
       Show back-to-top button
       after scrolling down.
    */

    topBtn.classList.toggle(
        "show",
        window.scrollY > 600
    );
}


window.addEventListener(
    "scroll",
    onScroll,
    {
        passive: true
    }
);


onScroll();



/* =========================================================
   BACK TO TOP
   ========================================================= */

topBtn.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);



/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

const menu =
    document.getElementById("menu");

const links =
    document.getElementById("links");


menu.addEventListener(
    "click",
    () => {

        const open =
            links.classList.toggle("open");

        menu.setAttribute(
            "aria-expanded",
            String(open)
        );

    }
);


/*
   Close mobile menu
   when a navigation link is clicked.
*/

links.querySelectorAll("a").forEach(
    (link) => {

        link.addEventListener(
            "click",
            () => {

                links.classList.remove("open");

                menu.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    }
);



/* =========================================================
   DARK / LIGHT MODE
   ========================================================= */

const theme =
    document.getElementById("theme");


/*
   Load saved theme.
*/

if (
    localStorage.getItem(
        "prajwal-theme"
    ) === "light"
) {

    document.body.classList.add("light");

    theme.textContent = "☾";
}


/*
   Change theme.
*/

theme.addEventListener(
    "click",
    () => {

        const light =
            document.body.classList.toggle(
                "light"
            );


        theme.textContent =
            light ? "☾" : "☼";


        localStorage.setItem(
            "prajwal-theme",
            light ? "light" : "dark"
        );

    }
);



/* =========================================================
   SCROLL REVEAL ANIMATION
   ========================================================= */

const reveal =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target.classList.add(
                            "visible"
                        );


                        /*
                           Stop observing after
                           the animation has happened.
                        */

                        revealObserver.unobserve(
                            entry.target
                        );

                    }

                }
            );

        },
        {
            threshold: 0.12
        }
    );


reveal.forEach(
    (element) => {

        revealObserver.observe(element);

    }
);



/* =========================================================
   ACTIVE NAVIGATION LINK
   ========================================================= */

const sections =
    [
        ...document.querySelectorAll(
            "main section[id]"
        )
    ];


const navItems =
    [
        ...document.querySelectorAll(
            ".links a"
        )
    ];


const sectionObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(
                (entry) => {

                    if (
                        !entry.isIntersecting
                    ) {
                        return;
                    }


                    navItems.forEach(
                        (link) => {

                            link.classList.toggle(
                                "active",

                                link.getAttribute(
                                    "href"
                                ) ===
                                "#" +
                                entry.target.id
                            );

                        }
                    );

                }
            );

        },
        {
            rootMargin:
                "-35% 0px -55% 0px"
        }
    );


sections.forEach(
    (section) => {

        sectionObserver.observe(section);

    }
);



/* =========================================================
   MOUSE FOLLOWING LIGHT
   ========================================================= */

const glow =
    document.querySelector(
        ".cursor-glow"
    );


if (
    glow &&
    matchMedia("(hover:hover)").matches
) {

    window.addEventListener(
        "mousemove",
        (event) => {

            glow.style.left =
                event.clientX + "px";

            glow.style.top =
                event.clientY + "px";

        }
    );

}



/* =========================================================
   KEYBOARD SHORTCUT
   Press "T" to change theme.
   ========================================================= */

window.addEventListener(
    "keydown",
    (event) => {

        if (
            event.key.toLowerCase() === "t" &&
            ![
                "INPUT",
                "TEXTAREA"
            ].includes(
                document.activeElement.tagName
            )
        ) {

            theme.click();

        }

    }
);



/* =========================================================
   FUTURE PROJECT UPDATE GUIDE
   =========================================================

   When you create a new project:

   1. Open index.html.

   2. Find:
      PROJECT / 001

   3. Duplicate the project <article>.

   4. Change:
      - Project number
      - Project type
      - Project title
      - Description
      - Technologies
      - GitHub URL
      - Live demo URL

   5. Put screenshots in:
      assets/images/

   6. Commit your changes.

   7. Push them to GitHub.

   8. GitHub Pages will publish the
      updated version.

   Your portfolio URL can remain
   exactly the same.

   ========================================================= */
