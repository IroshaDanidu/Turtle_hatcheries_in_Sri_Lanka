

if (window.location.href == "https://iroshadanidu.github.io/Turtle_hatcheries_in_Sri_Lanka/javascript%20new/index.html") {


    const daysTag = document.querySelector(".days"),
        currentDate = document.querySelector(".current-date"),
        prevNextIcon = document.querySelectorAll(".icons span");

    // getting new date, current year and month
    let date = new Date(),
        currYear = date.getFullYear(),
        currMonth = date.getMonth();

    // storing full name of all months in array
    const months = ["January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"];

    const renderCalendar = () => {
        let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
            lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
            lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
            lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
        let liTag = "";

        for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
            liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
        }

        for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
            // adding active class to li if the current day, month, and year matched
            let isToday = i === date.getDate() && currMonth === new Date().getMonth()
                && currYear === new Date().getFullYear() ? "active" : "";
            liTag += `<li class="${isToday}" id="num${i}"  onclick="getSelectedDay(${i})">${i}</li>`;
        }

        for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
            liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
        }
        currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
        daysTag.innerHTML = liTag;
    }




    renderCalendar();








    prevNextIcon.forEach(icon => { // getting prev and next icons
        icon.addEventListener("click", () => { // adding click event on both icons
            // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
            currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

            if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
                // creating a new date of current year & month and pass it as date value
                date = new Date(currYear, currMonth, new Date().getDate());
                currYear = date.getFullYear(); // updating current year with new date year
                currMonth = date.getMonth(); // updating current month with new date month
            } else {
                date = new Date(); // pass the current date as date value
            }
            renderCalendar(); // calling renderCalendar function
        });
    });


    ///////////////////////////////////////////////////////////////////////

    let dateSetup = new Date();
    let day = dateSetup.getDate();

    let prev = "num" + day;

    function getSelectedDay(i) {
        /* 
            console.log(i);
            console.log(currMonth + 1);
            console.log(currYear);
            console.log("-----------") */

        let selectedDay = document.getElementById(`num${i}`);
        selectedDay.classList.add("active");


        let selectedDefaultDay = document.getElementById(prev);
        selectedDefaultDay.classList.remove("active");

        prev = "num" + i;

        dateSetup = i + '/' + (currMonth + 1) + '/' + currYear;
        /*  console.log(dateSetup); */
        document.getElementById('date').innerText = dateSetup;

    }
















    let data1 = 0;
    let data2 = 0;
    let data3 = 0;
    let data4 = 0;
    let data5 = 0;
    document.getElementById('count1').innerText = data1;
    document.getElementById('count2').innerText = data2;
    document.getElementById('count3').innerText = data3;
    document.getElementById('count4').innerText = data4;
    document.getElementById('count5').innerText = data5;

    // guest
    /* // 11111
    let normal=hourr-peakcount; */

    let intial1 = 0;
    sessionStorage.setItem("sl-a", intial1);
    let intial2 = 0;
    sessionStorage.setItem("sl-ch", intial2);
    let intial3 = 0;
    sessionStorage.setItem("f-a", intial3);
    let intial4 = 0;
    sessionStorage.setItem("f-c", intial4);


    function g1p() {

        let slacharge1 = 0;
        let normal = (sessionStorage.getItem("local-hour")) - (sessionStorage.getItem("local-peakcount"));
        let peakcount = (sessionStorage.getItem("local-peakcount"));
        data1 = data1 + 1;
        document.getElementById('count1').innerText = data1;

        document.getElementById('qw').style.display = "none";
        document.getElementById('sla').style.display = "";

        document.getElementById('slat1').innerText = `${data1} SL Adult`;

        slacharge1 = data1 * ((4 * normal) + (6 * peakcount));
        document.getElementById('slat2').innerText = `$${slacharge1}`;

        sessionStorage.setItem("sl-a", slacharge1);

        let total = (parseInt(sessionStorage.getItem("sl-a")) + parseInt(sessionStorage.getItem("sl-ch")) + parseInt(sessionStorage.getItem("f-a")) + parseInt(sessionStorage.getItem("f-c")));


        document.getElementById('t2').innerText = `$${total}`;


    }





    // sessionStorage.setItem("local-hour", hourr);
    function g1m() {

        if (data1 == 0) {
            data1 = 0;
        }
        else {
            let slacharge1 = 0;
            let normal = (sessionStorage.getItem("local-hour")) - (sessionStorage.getItem("local-peakcount"));
            let peakcount = (sessionStorage.getItem("local-peakcount"));

            data1 = data1 - 1;
            document.getElementById('count1').innerText = data1;


            document.getElementById('qw').style.display = "none";

            document.getElementById('sla').style.display = "";
            document.getElementById('slat1').innerText = `${data1} SL Adult`;
            sessionStorage.setItem("local-slat1", `${data1} SL Adult`);
            slacharge1 = data1 * ((4 * normal) - (6 * peakcount));
            document.getElementById('slat2').innerText = `$${slacharge1}`;

            sessionStorage.setItem("sl-a", slacharge1);

            let total = (parseInt(sessionStorage.getItem("sl-a")) + parseInt(sessionStorage.getItem("sl-ch")) + parseInt(sessionStorage.getItem("f-a")) + parseInt(sessionStorage.getItem("f-c")));

            document.getElementById('t2').innerText = `$${total}`;

        }
    }

    // 22222

    function g2p() {

        let slacharge2 = 0;

        let normal = (sessionStorage.getItem("local-hour")) - (sessionStorage.getItem("local-peakcount"));
        let peakcount = (sessionStorage.getItem("local-peakcount"));


        data2 = data2 + 1;
        document.getElementById('count2').innerText = data2;


        document.getElementById('qw').style.display = "nonsee";

        document.getElementById('slc').style.display = "";
        document.getElementById('slct1').innerText = `${data2} SL Child`;
        slacharge2 = data2 * ((2 * normal) + (3 * peakcount));
        document.getElementById('slct2').innerText = `$${slacharge2}`;

        sessionStorage.setItem("sl-ch", slacharge2);

        let total = (parseInt(sessionStorage.getItem("sl-a")) + parseInt(sessionStorage.getItem("sl-ch")) + parseInt(sessionStorage.getItem("f-a")) + parseInt(sessionStorage.getItem("f-c")));

        document.getElementById('t2').innerText = `$${total}`;

    }
    function g2m() {

        if (data2 == 0) {
            data2 = 0;
        }
        else {
            let slacharge2 = 0;
            let normal = (sessionStorage.getItem("local-hour")) - (sessionStorage.getItem("local-peakcount"));
            let peakcount = (sessionStorage.getItem("local-peakcount"));

            data2 = data2 - 1;
            document.getElementById('count2').innerText = data2;


            document.getElementById('qw').style.display = "none";

            document.getElementById('slc').style.display = "";
            document.getElementById('slct1').innerText = `${data2} SL Child`;
            slacharge2 = data2 * ((2 * normal) - (3 * peakcount));
            document.getElementById('slct2').innerText = `$${slacharge2}`;

            sessionStorage.setItem("sl-ch", slacharge2);

            let total = (parseInt(sessionStorage.getItem("sl-a")) + parseInt(sessionStorage.getItem("sl-ch")) + parseInt(sessionStorage.getItem("f-a")) + parseInt(sessionStorage.getItem("f-c")));

            document.getElementById('t2').innerText = `$${total}`;

        }
    }




    //  3333


    function g3p() {
        let slacharge3 = 0;

        let normal = (sessionStorage.getItem("local-hour")) - (sessionStorage.getItem("local-peakcount"));
        let peakcount = (sessionStorage.getItem("local-peakcount"));



        data3 = data3 + 1;
        document.getElementById('count3').innerText = data3;


        document.getElementById('qw').style.display = "none";

        document.getElementById('fa').style.display = "";
        document.getElementById('fat1').innerText = `${data3} Foreigner Adult`;
        slacharge3 = data3 * ((10 * normal) + (13 * peakcount));
        document.getElementById('fat2').innerText = `$${slacharge3}`;

        sessionStorage.setItem("f-a", slacharge3);

        let total = (parseInt(sessionStorage.getItem("sl-a")) + parseInt(sessionStorage.getItem("sl-ch")) + parseInt(sessionStorage.getItem("f-a")) + parseInt(sessionStorage.getItem("f-c")));

        document.getElementById('t2').innerText = `$${total}`;

    }
    function g3m() {

        if (data3 == 0) {
            data3 = 0;
        }
        else {
            let slacharge3 = 0;
            let normal = (sessionStorage.getItem("local-hour")) - (sessionStorage.getItem("local-peakcount"));
            let peakcount = (sessionStorage.getItem("local-peakcount"));


            data3 = data3 - 1;
            document.getElementById('count3').innerText = data3;

            document.getElementById('qw').style.display = "none";

            document.getElementById('fa').style.display = "";
            document.getElementById('fat1').innerText = `${data3} Foreigner Adult`;
            slacharge3 = data3 * ((10 * normal) - (13 * peakcount));
            document.getElementById('fat2').innerText = `$${slacharge3}`;

            sessionStorage.setItem("f-a", slacharge3);

            let total = (parseInt(sessionStorage.getItem("sl-a")) + parseInt(sessionStorage.getItem("sl-ch")) + parseInt(sessionStorage.getItem("f-a")) + parseInt(sessionStorage.getItem("f-c")));

            document.getElementById('t2').innerText = `$${total}`;
        }
    }

    // 444444


    function g4p() {
        let slacharge4 = 0;
        let normal = (sessionStorage.getItem("local-hour")) - (sessionStorage.getItem("local-peakcount"));
        let peakcount = (sessionStorage.getItem("local-peakcount"));


        data4 = data4 + 1;
        document.getElementById('count4').innerText = data4;


        document.getElementById('qw').style.display = "none";

        document.getElementById('fc').style.display = "";
        document.getElementById('fct1').innerText = `${data4} Foreigner Child`;
        slacharge4 = data4 * ((5 * normal) + (8 * peakcount));
        document.getElementById('fct2').innerText = `$${slacharge4}`;

        sessionStorage.setItem("f-c", slacharge4);

        let total = (parseInt(sessionStorage.getItem("sl-a")) + parseInt(sessionStorage.getItem("sl-ch")) + parseInt(sessionStorage.getItem("f-a")) + parseInt(sessionStorage.getItem("f-c")));

        document.getElementById('t2').innerText = `$${total}`;
    }
    function g4m() {

        if (data4 == 0) {
            data4 = 0;
        }
        else {
            let slacharge4 = 0;
            let normal = (sessionStorage.getItem("local-hour")) - (sessionStorage.getItem("local-peakcount"));
            let peakcount = (sessionStorage.getItem("local-peakcount"));


            data4 = data4 - 1;
            document.getElementById('count4').innerText = data4;

            document.getElementById('qw').style.display = "none";

            document.getElementById('fc').style.display = "";
            document.getElementById('fct1').innerText = `${data4} Foreigner Child`;
            slacharge4 = data4 * ((5 * normal) - (8 * peakcount));
            document.getElementById('fct2').innerText = `$${slacharge4}`;

            sessionStorage.setItem("f-c", slacharge4);

            let total = (parseInt(sessionStorage.getItem("sl-a")) + parseInt(sessionStorage.getItem("sl-ch")) + parseInt(sessionStorage.getItem("f-a")) + parseInt(sessionStorage.getItem("f-c")));

            document.getElementById('t2').innerText = `$${total}`;

        }
    }




    // 5555555
    function g5p() {

        data5 = data5 + 1;
        document.getElementById('count5').innerText = data5;

    }
    function g5m() {

        if (data5 == 0) {
            data5 = 0;
        }
        else {

            data5 = data5 - 1;
            document.getElementById('count5').innerText = data5;

        }
    }

















    // time pick

    function bb() {

        let hourr = 0;
        let tstart = 0;
        let tstop = 0;


        let checkbox1 = document.getElementById("mycheck1");
        let box1 = document.getElementById('box1');

        let checkbox2 = document.getElementById("mycheck2");
        let box2 = document.getElementById('box2');


        let checkbox3 = document.getElementById("mycheck3");
        let box3 = document.getElementById('box3');


        let checkbox4p = document.getElementById("mycheck4p");
        let box4p = document.getElementById('box4p');



        let checkbox5p = document.getElementById("mycheck5p");
        let box5p = document.getElementById('box5p');


        let checkbox6p = document.getElementById("mycheck6p");
        let box6p = document.getElementById('box6p');



        let checkbox7 = document.getElementById("mycheck7");
        let box7 = document.getElementById('box7');



        let checkbox8 = document.getElementById("mycheck8");
        let box8 = document.getElementById('box8');



        let checkbox9p = document.getElementById("mycheck9p");
        let box9p = document.getElementById('box9p');



        let checkbox10p = document.getElementById("mycheck10p");
        let box10p = document.getElementById('box10p');



        let checkbox11p = document.getElementById("mycheck11p");
        let box11p = document.getElementById('box11p');


        // time


        if (checkbox1.checked == true) {
            box1.style.backgroundColor = "rgb(157, 199, 202)"
        }
        else {
            box1.style.backgroundColor = ""
        }


        if (checkbox2.checked == true) {
            box2.style.backgroundColor = "rgb(157, 199, 202)"
        }
        else {
            box2.style.backgroundColor = ""
        }


        if (checkbox3.checked == true) {
            box3.style.backgroundColor = "rgb(157, 199, 202)"
        }
        else {
            box3.style.backgroundColor = ""
        }

        if (checkbox4p.checked == true) {
            box4p.style.backgroundColor = "rgb(157, 199, 202)"
        }
        else {
            box4p.style.backgroundColor = ""
        }



        if (checkbox5p.checked == true) {
            box5p.style.backgroundColor = "rgb(157, 199, 202)"
        }
        else {
            box5p.style.backgroundColor = ""
        }



        if (checkbox6p.checked == true) {
            box6p.style.backgroundColor = "rgb(157, 199, 202)"
        }
        else {
            box6p.style.backgroundColor = ""
        }

        if (checkbox7.checked == true) {
            box7.style.backgroundColor = "rgb(157, 199, 202)"
        }
        else {
            box7.style.backgroundColor = ""
        }


        if (checkbox8.checked == true) {
            box8.style.backgroundColor = "rgb(157, 199, 202)"
        }
        else {
            box8.style.backgroundColor = ""
        }



        if (checkbox9p.checked == true) {
            box9p.style.backgroundColor = "rgb(157, 199, 202)"
        }
        else {
            box9p.style.backgroundColor = ""
        }



        if (checkbox10p.checked == true) {
            box10p.style.backgroundColor = "rgb(157, 199, 202)"
        }
        else {
            box10p.style.backgroundColor = ""
        }


        if (checkbox11p.checked == true) {
            box11p.style.backgroundColor = "rgb(157, 199, 202)"
        }
        else {
            box11p.style.backgroundColor = ""
        }














        // select hours


        let peakcount = 0;



        // 1 to 6

        if (checkbox4p.checked == true && checkbox5p.checked == true &&
            checkbox6p.checked == true && checkbox9p.checked == true &&
            checkbox10p.checked == true && checkbox11p.checked == true) {
            peakcount = 6;
        } else if (checkbox4p.checked == true && checkbox5p.checked == true &&
            checkbox6p.checked == true && checkbox9p.checked == true &&
            checkbox10p.checked == true) { peakcount = 5 }
        else if (checkbox4p.checked == true && checkbox5p.checked == true &&
            checkbox6p.checked == true && checkbox9p.checked == true) { peakcount = 4 }
        else if (checkbox4p.checked == true && checkbox5p.checked == true &&
            checkbox6p.checked == true) { peakcount = 3 }
        else if (checkbox4p.checked == true && checkbox5p.checked == true) { peakcount = 2 }
        else if (checkbox4p.checked == true) { peakcount = 1 }

        // 2 to 6
        if (checkbox5p.checked == true &&
            checkbox6p.checked == true && checkbox9p.checked == true &&
            checkbox10p.checked == true && checkbox11p.checked == true) {
            peakcount = 5;
        } else if (checkbox5p.checked == true &&
            checkbox6p.checked == true && checkbox9p.checked == true &&
            checkbox10p.checked == true) { peakcount = 4 }
        else if (checkbox5p.checked == true && checkbox6p.checked == true &&
            checkbox9p.checked == true) { peakcount = 3 }
        else if (checkbox5p.checked == true && checkbox6p.checked == true
        ) { peakcount = 2 }
        else if (checkbox5p.checked == true) { peakcount = 1 }

        // 3 to 6
        if (
            checkbox6p.checked == true && checkbox9p.checked == true &&
            checkbox10p.checked == true && checkbox11p.checked == true) {
            peakcount = 4;
        } else if (checkbox6p.checked == true &&
            checkbox9p.checked == true && checkbox10p.checked == true) { peakcount = 3 }
        else if (checkbox6p.checked == true &&
            checkbox9p.checked == true) { peakcount = 2 }
        else if (checkbox6p.checked == true
        ) { peakcount = 1 }


        // 4 to 6

        if (
            checkbox9p.checked == true &&
            checkbox10p.checked == true && checkbox11p.checked == true) {
            peakcount = 3;
        } else if (
            checkbox9p.checked == true && checkbox10p.checked == true) { peakcount = 2 }
        else if (
            checkbox9p.checked == true) { peakcount = 1 }
        //   5 to 6

        if (

            checkbox10p.checked == true && checkbox11p.checked == true) {
            peakcount = 2;
        } else if (
            checkbox10p.checked == true) { peakcount = 1 }

        // 6

        if (

            checkbox11p.checked == true) {
            peakcount = 1;

        } else {
            peakcount = 0;
        }


        sessionStorage.setItem("local-peakcount", peakcount);


        /* let hourr = 0;
        let tstart = 0;
        let tstop = 0; */


        if (checkbox1.checked == true) {
            hourr = +1;

            if (checkbox2.checked == true) {
                hourr += 1;


                if (checkbox3.checked == true) {
                    hourr += 1;


                    if (checkbox4p.checked == true) {
                        hourr += 1;


                        if (checkbox5p.checked == true) {
                            hourr += 1;


                            if (checkbox6p.checked == true) {
                                hourr += 1;


                                if (checkbox7.checked == true) {
                                    hourr += 1;


                                    if (checkbox8.checked == true) {
                                        hourr += 1;


                                        if (checkbox9p.checked == true) {
                                            hourr += 1;


                                            if (checkbox10p.checked == true) {
                                                hourr += 1;


                                                if (checkbox11p.checked == true) {
                                                    hourr += 1;


                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }

        }

        else if (checkbox2.checked == true) {
            hourr += 1;
            if (checkbox3.checked == true) {
                hourr += 1;
                if (checkbox4p.checked == true) {
                    hourr += 1;
                    if (checkbox5p.checked == true) {
                        hourr += 1;
                        if (checkbox6p.checked == true) {
                            hourr += 1;
                            if (checkbox7.checked == true) {
                                hourr += 1;
                                if (checkbox8.checked == true) {
                                    hourr += 1;
                                    if (checkbox9p.checked == true) {
                                        hourr += 1;
                                        if (checkbox10p.checked == true) {
                                            hourr += 1;
                                            if (checkbox11p.checked == true) {
                                                hourr += 1;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }



        }
        else if (checkbox3.checked == true) {
            hourr += 1;

            if (checkbox4p.checked == true) {
                hourr += 1;
                if (checkbox5p.checked == true) {
                    hourr += 1;
                    if (checkbox6p.checked == true) {
                        hourr += 1;
                        if (checkbox7.checked == true) {
                            hourr += 1;
                            if (checkbox8.checked == true) {
                                hourr += 1;
                                if (checkbox9p.checked == true) {
                                    hourr += 1;
                                    if (checkbox10p.checked == true) {
                                        hourr += 1;
                                        if (checkbox11p.checked == true) {
                                            hourr += 1;
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }



        }

        else if (checkbox4p.checked == true) {
            hourr += 1;
            if (checkbox5p.checked == true) {
                hourr += 1;
                if (checkbox6p.checked == true) {
                    hourr += 1;
                    if (checkbox7.checked == true) {
                        hourr += 1;
                        if (checkbox8.checked == true) {
                            hourr += 1;
                            if (checkbox9p.checked == true) {
                                hourr += 1;
                                if (checkbox10p.checked == true) {
                                    hourr += 1;
                                    if (checkbox11p.checked == true) {
                                        hourr += 1;
                                    }
                                }
                            }
                        }
                    }
                }
            }



        }
        else if (checkbox5p.checked == true) {
            hourr += 1;
            if (checkbox6p.checked == true) {
                hourr += 1;
                if (checkbox7.checked == true) {
                    hourr += 1;
                    if (checkbox8.checked == true) {
                        hourr += 1;
                        if (checkbox9p.checked == true) {
                            hourr += 1;
                            if (checkbox10p.checked == true) {
                                hourr += 1;
                                if (checkbox11p.checked == true) {
                                    hourr += 1;
                                }
                            }
                        }
                    }
                }
            } check



        }
        else if (checkbox6p.checked == true) {
            hourr += 1;
            if (checkbox7.checked == true) {
                hourr += 1;
                if (checkbox8.checked == true) {
                    hourr += 1;
                    if (checkbox9p.checked == true) {
                        hourr += 1;
                        if (checkbox10p.checked == true) {
                            hourr += 1;
                            if (checkbox11p.checked == true) {
                                hourr += 1;
                            }
                        }
                    }
                }
            }



        }

        else if (checkbox7.checked == true) {
            hourr += 1;
            if (checkbox8.checked == true) {
                hourr += 1;
                if (checkbox9p.checked == true) {
                    hourr += 1;
                    if (checkbox10p.checked == true) {
                        hourr += 1;
                        if (checkbox11p.checked == true) {
                            hourr += 1;
                        }
                    }
                }
            }



        }

        else if (box8.checked == true) {
            hourr += 1;
            if (box9p.checked == true) {
                hourr += 1;
                if (box10p.checked == true) {
                    hourr += 1;
                    if (box11p.checked == true) {
                        hourr += 1;
                    }
                }
            }



        }
        else if (checkbox9p.checked == true) {
            hourr += 1;
            if (checkbox10p.checked == true) {
                hourr += 1;
                if (checkbox11p.checked == true) {
                    hourr += 1;
                }
            }



        }

        else if (checkbox10p.checked == true) {
            hourr += 1;
            if (checkbox11p.checked == true) {
                hourr += 1;
            }



        }

        else if (checkbox11p.checked == true) {
            hourr += 1;
        }



        sessionStorage.setItem("local-hour", hourr);

        let displyhHourr = `${hourr} hrs`
        document.getElementById('hrs').innerText = displyhHourr;




        // start and stop time 


        if (checkbox1.checked == true && checkbox2.checked == true && checkbox3.checked == true && checkbox4p.checked == true && checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true && checkbox9p.checked == true && checkbox10p.checked == true && checkbox11p.checked) {
            tstart = 7;
            tstop = 18;
        }
        else if (checkbox1.checked == true && checkbox2.checked == true && checkbox3.checked == true && checkbox4p.checked == true && checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true && checkbox9p.checked == true && checkbox10p.checked == true) {
            tstart = 7;
            tstop = 17;
        }
        else if (checkbox1.checked == true && checkbox2.checked == true && checkbox3.checked == true && checkbox4p.checked == true && checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true && checkbox9p.checked == true) {
            tstart = 7;
            tstop = 16;
        }
        else if (checkbox1.checked == true && checkbox2.checked == true && checkbox3.checked == true && checkbox4p.checked == true && checkbox5p.cheched == true && checkbox6p.cheched == true && checkbox7.cheched == true && checkbox8.checked == true) {
            tstart = 7;
            tstop = 15;
        }
        else if (checkbox1.checked == true && checkbox2.checked == true && checkbox3.checked == true && checkbox4p.checked == true && checkbox5p.cheched == true && checkbox6p.cheched == true && checkbox7.cheched == true) {
            tstart = 7;
            tstop = 14;
        }
        else if (checkbox1.checked == true && checkbox2.checked == true && checkbox3.checked == true && checkbox4p.checked == true && checkbox5p.cheched == true && checkbox6p.cheched == true) {
            tstart = 7;
            tstop = 13;
        }
        else if (checkbox1.checked == true && checkbox2.checked == true && checkbox3.checked == true && checkbox4p.checked == true && checkbox5p.checked == true) {
            tstart = 7;
            tstop = 12;
        }
        else if (checkbox1.checked == true && checkbox2.checked == true && checkbox3.checked == true && checkbox4p.checked == true) {
            tstart = 7;
            tstop = 11;
        }
        else if (checkbox1.checked == true && checkbox2.checked == true && checkbox3.checked == true) {
            tstart = 7;
            tstop = 10;
        }
        else if (checkbox1.checked == true && checkbox2.checked == true) {
            tstart = 7;
            tstop = 9;
        }
        else if (checkbox1.checked == true) {
            tstart = 7;
            tstop = 8;
        }

        // 8 to 18

        else if (checkbox2.checked == true && checkbox3.checked == true && checkbox4p.checked == true && checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true && checkbox9p.checked == true && checkbox10p.checked == true && checkbox11p.checked == true) {
            tstart = 8;
            tstop = 18;
        }
        else if (checkbox2.checked == true && checkbox3.checked == true && checkbox4p.checked == true && checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true && checkbox9p.checked == true && checkbox10p.checked == true) {
            tstart = 8;
            tstop = 17;
        }
        else if (checkbox2.checked == true && checkbox3.checked == true && checkbox4p.checked == true && checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true && checkbox9p.checked == true) {
            tstart = 8; check
            tstop = 16;
        }
        else if (checkbox2.checkecheckd == true && checkbox3.checked == true && checkbox4p.checked == true && checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true) {
            tstart = 8;
            tstop = 15;
        }
        else if (checkbox2.checked == true && checkbox3.checked == true && checkbox4p.checked == true && checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true) {
            tstart = 8;
            tstop = 14;
        }
        else if (checkbox2.checked == true && checkbox3.checked == true && checkbox4p.checked == true && checkbox5p.checked == true && checkbox6p.checked == true) {
            tstart = 8;
            tstop = 13;
        }
        else if (checkbox2.checked == true && checkbox3.checked == true && checkbox4p.checked == true && checkbox5p.checked == true) {
            tstart = 8;
            tstop = 12;
        }
        else if (checkbox2.ccheckhecked == true && checkbox3.checked == true && checkedbox4p.checked == true) {
            tstart = 8;
            tstop = 11;
        }
        else if (checkbox2.checked == true && checkbox3.checked == true) {
            tstart = 8;
            tstop = 10;
        }
        else if (checkbox2.checked == true) {
            tstart = 8;
            tstop = 9;
        }


        // 9 to 18


        else if (checkbox3.checked == true && checkbox4p.checked == true && checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true && checkbox9p.checked == true && checkbox10p.checked == true && checkbox11p.checked == true.checked) {
            tstart = 9;
            tstop = 18;
        }
        else if (checkbox3.checked == true && checkbox4p.checked == true && checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true && checkbox9p.checked == true && checkbox10p.checked == true.checked) {
            tstart = 9;
            tstop = 17;
        }
        else if (checkbox3.checked == true && checkbox4p.checked == true && checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true && checkbox9.checked == true.checked) {
            tstart = 9;
            tstop = 16;
        }
        else if (checkbox3.checked == true && checkbox4p.checked == true && checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true.checked == true) {
            tstart = 9;
            tstop = 15;
        }
        else if (checkbox3.checked == true && checkbox4p.checked == true && checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true) {
            tstart = 9;
            tstop = 14;
        }
        else if (checkbox3.checked == true && checkbox4p.checked == true && checkbox5p.checked == true && checkbox6p.checked == true) {
            tstart = 9;
            tstop = 13;
        }
        else if (checkbox3.checked == true && checkbox4p.checked == true && checkbox5p.checked == true) {
            tstart = 9;
            tstop = 12;
        }
        else if (checkbox3.checked == true && checkbox4p.checked == true) {
            tstart = 9;
            tstop = 11;
        }
        else if (checkbox3.checked == true) {
            tstart = 9;
            tstop = 10;
        }

        // 10 to 18

        else if (checkbox4p.checked == true && checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true && checkbox9p.checked == true && checkbox10p.checked == true && checkbox11p.checked == true) {
            tstart = 10;
            tstop = 18;
        }
        else if (checkbox4p.checked == true && checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true && checkbox9p.checked == true && checkbox10p.checked == true) {
            tstart = 10;
            tstop = 17;
        }
        else if (checkbox4p.checked == true && checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true && checkbox9.checked == true) {
            tstart = 10;
            tstop = 16;
        }
        else if (checkbox4p.checked == true && checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true) {
            tstart = 10;
            tstop = 15;
        }
        else if (checkbox4p.checked == true && checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true) {
            tstart = 10;
            tstop = 14;
        }
        else if (checkbox4p.checked == true && checkbox5p.checked == true && checkbox6p.checked == true) {
            tstart = 10;
            tstop = 13;
        }
        else if (checkbox4p.checked == true && checkbox5p.checked == true) {
            tstart = 10;
            tstop = 12;
        }
        else if (checkbox4p.checked == true) {
            tstart = 10;
            tstop = 11;
        }


        // 11 to 18

        else if (checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true && checkbox9p.checked == true && checkbox10p.checked == true && checkbox11p.checked == true.checked == true) {
            tstart = 11;
            tstop = 18;
        }
        else if (checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true && checkbox9p.checked == true && checkbox10p.checked == true) {
            tstart = 11;
            tstop = 17;
        }
        else if (checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true && checkbox9p.checked == true) {
            tstart = 11;
            tstop = 16;
        }
        else if (checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true) {
            tstart = 11;
            tstop = 15;
        }
        else if (checkbox5p.checked == true && checkbox6p.checked == true && checkbox7.checked == true) {
            tstart = 11;
            tstop = 14;
        }
        else if (checkbox5p.checked == true && checkbox6p.checked == true) {
            tstart = 11;
            tstop = 13;
        }
        else if (checkbox5p.checked == true) {
            tstart = 11;
            tstop = 12;
        }



        // 12 to 18

        else if (checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true && checkbox9p.checked == true && checkbox10p.checked == true && checkbox11p.checked == true) {
            tstart = 12;
            tstop = 18;
        }
        else if (checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true && checkbox9p.checked == true && checkbox10p.checked == true) {
            tstart = 12;
            tstop = 17;
        }
        else if (checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true && checkbox9.checked == true) {
            tstart = 12;
            tstop = 16;
        }
        else if (checkbox6p.checked == true && checkbox7.checked == true && checkbox8.checked == true) {
            tstart = 12;
            tstop = 15;
        }
        else if (checkbox6p.checked == true && checkbox7.checked == true) {
            tstart = 12;
            tstop = 14;
        }
        else if (checkbox6p.checked == true) {
            tstart = 12;
            tstop = 13;
        }

        // 13 to 18

        else if (checkbox7.checked == true && checkbox8.checked == true && checkbox9p.checked == true && checkbox10p.checked == true && checkbox11p.checked == true) {
            tstart = 13;
            tstop = 18;
        }
        else if (checkbox7.checked == true && checkbox8.checked == true && checkbox9p.checked == true && checkbox10p.checked == true) {
            tstart = 13;
            tstop = 17;
        }
        else if (checkbox7.checked == true && checkbox8.checked == true && checkbox9p.checked == true) {
            tstart = 13;
            tstop = 16;
        }
        else if (checkbox7.checked == true && checkbox8.checked == true) {
            tstart = 13;
            tstop = 15;
        }
        else if (checkbox7.checked == true) {
            tstart = 13;
            tstop = 14;
        }


        // 14 to 18

        else if (checkbox8.checked == true && checkbox9p.checked == true && checkbox10p.checked == true && checkbox11p.checked == true) {
            tstart = 14;
            tstop = 18;
        }
        else if (checkbox8.checked == true && checkbox9p.checked == true && checkbox10p.checked == true) {
            tstart = 14;
            tstop = 17;
        }
        else if (checkbox8.checked == true && checkbox9p.checked == true) {
            tstart = 14;
            tstop = 16;
        }
        else if (checkbox8.checked == true) {
            tstart = 14;
            tstop = 15;
        }


        // 15 to 18

        else if (checkbox9p.checked == true && checkbox10p.checked == true && checkbox11p.checked == true) {
            tstart = 15;
            tstop = 18;
        }
        else if (checkbox9p.checked == true && checkbox10p.checked == true) {
            tstart = 15;
            tstop = 17;
        }
        else if (checkbox9p.checked == true) {
            tstart = 15;
            tstop = 16;
        }


        // 17 to 18

        else if (checkbox10p.checked == true && checkbox11p.checked == true) {
            tstart = 17;
            tstop = 18;
        }


        // conve\t tinme to strimnhng
        let timestartString = "";
        let timestopString = "";

        if (tstart == 7) {
            timestartString = "07.00 am";
        }
        if (tstop == 8) {
            timestopString = "08.00 am";
        }


        if (tstart == 8) {
            timestartString = "08.00 am";
        }
        if (tstop == 9) {
            timestopString = "09.00 am";
        }


        if (tstart == 9) {
            timestartString = "09.00 am";
        }
        if (tstop == 10) {
            timestopString = "10.00 am";
        }


        if (tstart == 10) {
            timestartString = "10.00 am";
        }
        if (tstop == 11) {
            timestopString = "11.00 am";
        }


        if (tstart == 11) {
            timestartString = "11.00 am";
        }
        if (tstop == 12) {
            timestopString = "12.00 pm";
        }


        if (tstart == 12) {
            timestartString = "12.00 pm";
        }
        if (tstop == 13) {
            timestopString = "13.00 pm";
        }


        if (tstart == 13) {
            timestartString = "13.00 pm";
        }
        if (tstop == 14) {
            timestopString = "14.00 pm";
        }


        if (tstart == 14) {
            timestartString = "14.00 pm";
        }
        if (tstop == 15) {
            timestopString = "15.00 pm";
        }


        if (tstart == 15) {
            timestartString = "15.00 pm";
        }
        if (tstop == 16) {
            timestopString = "16.00 pm";
        }


        if (tstart == 17) {
            timestartString = "17.00 pm";
        }
        if (tstop == 18) {
            timestopString = "18.00 pm";
        }

        let timeString = `${timestartString} to ${timestopString}`

        sessionStorage.setItem('local-ti', timeString)

        document.getElementById('ti').innerText = timeString;



    }






















    // ticket page table


    function next() {

        let tableDate = document.getElementById("date").innerText;
        sessionStorage.setItem("table-date", tableDate);
        let tableTime = document.getElementById("ti").innerText;
        sessionStorage.setItem("table-time", tableTime);
        let tableDuration = document.getElementById("hrs").innerText;
        sessionStorage.setItem("table-duration", tableDuration);


        let tableCharge1 = document.getElementById("slat2").innerText;
        sessionStorage.setItem("table-slaC", tableCharge1);


        let tableCharge2 = document.getElementById("slct2").innerText;
        sessionStorage.setItem("table-slcC", tableCharge2);


        let tableCharge3 = document.getElementById("fat2").innerText;
        sessionStorage.setItem("table-fatC", tableCharge3);


        let tableCharge4 = document.getElementById("fct2").innerText;
        sessionStorage.setItem("table-fctC", tableCharge4);




        sessionStorage.setItem("table-name1", document.getElementById('slat1').innerText);
        sessionStorage.setItem("table-name2", document.getElementById('slct1').innerText);
        sessionStorage.setItem("table-name3", document.getElementById('fat1').innerText);
        sessionStorage.setItem("table-name4", document.getElementById('fct1').innerText);






        sessionStorage.setItem("local-tot", document.getElementById('t2').innerText);


    }


}

// details page Table
// 
// 


if (window.location.href == "https://iroshadanidu.github.io/Turtle_hatcheries_in_Sri_Lanka/javascript%20new/details.html") {

    document.getElementById("date").innerText = sessionStorage.getItem("table-date");
    document.getElementById("ti").innerText = sessionStorage.getItem("table-time");
    document.getElementById("hrs").innerText = sessionStorage.getItem("table-duration");




    document.getElementById("t2").innerText = sessionStorage.getItem("local-tot");




    document.getElementById("slat1").innerText = sessionStorage.getItem("table-name1");
    document.getElementById("slat2").innerText = sessionStorage.getItem("table-slaC");

    document.getElementById("slct1").innerText = sessionStorage.getItem("table-name2");
    document.getElementById("slct2").innerText = sessionStorage.getItem("table-slcC");


    document.getElementById("fat1").innerText = sessionStorage.getItem("table-name3");
    document.getElementById("fat2").innerText = sessionStorage.getItem("table-fatC");


    document.getElementById("fct1").innerText = sessionStorage.getItem("table-name4");
    document.getElementById("fct2").innerText = sessionStorage.getItem("table-fctC");



    let tableT1 = document.getElementById("slat2").innerText;

    let tableT2 = document.getElementById("slct2").innerText;

    let tableT3 = document.getElementById("fat2").innerText;

    let tableT4 = document.getElementById("fct2").innerText;



    // 

    if (tableT1 != "$0") {
        document.getElementById("sla").style.display = "";

    } else {
        document.getElementById("sla").style.display = "none";
    }


    if (tableT2 != "$0") {
        document.getElementById("slc").style.display = "";

    } else {
        document.getElementById("slc").style.display = "none";
    }


    if (tableT3 != "$0") {
        document.getElementById("fa").style.display = "";

    } else {
        document.getElementById("fa").style.display = "none";
    }



    if (tableT4 != "$0") {
        document.getElementById("fc").style.display = "";

    } else {
        document.getElementById("fc").style.display = "none";
    }


    function pickGender(selectedGender) {
        let pickedGender = selectedGender.options[selectedGender.selectedIndex].text;
        sessionStorage.setItem("fgender", pickedGender);
    }


    function btnSub() {



        let name = document.getElementById("namefull").value;
        let number = document.getElementById("phone").value;
        let mail = document.getElementById("emaila").value;
        /*         let gm = document.getElementById("m").value;
                let gf = document.getElementById("f").value; */

        sessionStorage.setItem("fname", name);
        sessionStorage.setItem("fnumber", number);
        sessionStorage.setItem("fmail", mail);
        /*         sessionStorage.setItem("gender-male", gm);
                sessionStorage.setItem("gender-fmail", gf); */
    




    // validate
    
        let namefull = document.getElementById('namefull');
        let phone = document.getElementById('phone');;
        let emaila = document.getElementById('emaila');;
        let conemail = document.getElementById('conemail');


        if (namefull.value.trim() === "") {
            onErro(namefull)
        } else {
            onSuccess(namefull);
        }


        if (emaila.value.trim() === "") {
            onErro(emaila, )
        } else{
            if(emaila.value.trim()!==conemail.value.trim()){
                onError(conPwd,"Email not matching");
             }
            if(!isValidEmail(emaila.value.trim())){
                onError(emaila,"Email is not valid");
            }else{
                onSuccess(emaila);
            }
        }
        
        if (conemail.value.trim() === "") {
            onErro(conemail, )
        } else{
            
            if(!isValidEmail(conemail.value.trim())){
                onError(conemail,"Email is not valid");
            }else{
                onSuccess(conemail);
            }
        }


        if (phone.value.trim() === "") {
            onErro(phone)
        } else {
            onSuccess(phone);
        }








    }

    function onSuccess(input) {
        let parent = input.parentElement;
        let messageele = parent.querySelector("small")
        messageele.style.visibility = "hidden";
        messageele.innerText = "";

        parent.classList.remove("error")
        parent.classList.add("success");
    }

    function onErro(input) {
        let parent = input.parentElement;
        let messageele = parent.querySelector("small")
        messageele.style.visibility = "visible";
        messageele.innerText = message;
        parent.classList.add("error")
        parent.classList.remove("success");
    }



    function isValidEmail(email){
        return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
     }
     


}

// con page

if (window.location.href == "https://iroshadanidu.github.io/Turtle_hatcheries_in_Sri_Lanka/javascript%20new/conf.html") {

    document.getElementById("date").innerText = sessionStorage.getItem("table-date");
    document.getElementById("ti").innerText = sessionStorage.getItem("table-time");
    document.getElementById("hrs").innerText = sessionStorage.getItem("table-duration");




    document.getElementById("t2").innerText = sessionStorage.getItem("local-tot");




    document.getElementById("slat1").innerText = sessionStorage.getItem("table-name1");
    document.getElementById("slat2").innerText = sessionStorage.getItem("table-slaC");

    document.getElementById("slct1").innerText = sessionStorage.getItem("table-name2");
    document.getElementById("slct2").innerText = sessionStorage.getItem("table-slcC");


    document.getElementById("fat1").innerText = sessionStorage.getItem("table-name3");
    document.getElementById("fat2").innerText = sessionStorage.getItem("table-fatC");


    document.getElementById("fct1").innerText = sessionStorage.getItem("table-name4");
    document.getElementById("fct2").innerText = sessionStorage.getItem("table-fctC");



    let tableT1 = document.getElementById("slat2").innerText;

    let tableT2 = document.getElementById("slct2").innerText;

    let tableT3 = document.getElementById("fat2").innerText;

    let tableT4 = document.getElementById("fct2").innerText;



    // 

    if (tableT1 != "$0") {
        document.getElementById("sla").style.display = "";

    } else {
        document.getElementById("sla").style.display = "none";
    }


    if (tableT2 != "$0") {
        document.getElementById("slc").style.display = "";

    } else {
        document.getElementById("slc").style.display = "none";
    }


    if (tableT3 != "$0") {
        document.getElementById("fa").style.display = "";

    } else {
        document.getElementById("fa").style.display = "none";
    }



    if (tableT4 != "$0") {
        document.getElementById("fc").style.display = "";

    } else {
        document.getElementById("fc").style.display = "none";
    }




    document.getElementById("n1").innerHTML = sessionStorage.getItem("fname");
    document.getElementById("mo").innerHTML = sessionStorage.getItem("fnumber");
    document.getElementById("e").innerHTML = sessionStorage.getItem("fmail");
    document.getElementById("gender").innerHTML = sessionStorage.getItem("fgender");


}



// payment page

if (window.location.href == "https://iroshadanidu.github.io/Turtle_hatcheries_in_Sri_Lanka/javascript%20new/pay.html") {

document.getElementById('comform').innerText = `PAY ${sessionStorage.getItem("local-tot")}`;





}
