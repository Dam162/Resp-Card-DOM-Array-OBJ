var container = document.getElementById("container");
// console.log("dskfjalskd")
var cardData = [
    userOne = {
        isVerrified: true,
        profileURL: "./images/businessman.jpg",
        profileName: "Andrew Neil",
        jobTitle: "Web Designer",
        jobDescription: "A web designer creates visually appealing and user-friendly websites, focusing on layout, graphics, typography, and overall aesthetics, ensuring a positive user experience. They collaborate with clients and developers to translate ideas into functional and engaging online experiences. "
    },
    userTwo = {
        isVerrified: false,
        profileURL: "./images/beautiful-young.jpeg",
        profileName: "Jasmine Carter",
        jobTitle: "UI Designer",
        jobDescription: "A UI (User Interface) Designer focuses on the visual and interactive elements of a product or application, ensuring a user-friendly and visually appealing experience. They design screens, interactive elements, and overall style, aiming for intuitive navigation and a positive user experience. "
    },
    userThree = {
        isVerrified: true,
        profileURL: "./images/handsome.jpg",
        profileName: "Justin Chung",
        jobTitle: "Graphic Designer",
        jobDescription: "A graphic designer creates visual concepts using software or by hand to communicate ideas, develop layouts, and produce designs for various applications like advertisements, brochures, magazines, and reports. "
    },
    userFour = {
        isVerrified: true,
        profileURL: "./images/high-angle.avif",
        profileName: "Appolo Reef",
        jobTitle: "Video Editor",
        jobDescription: "A Video Editor job description typically involves manipulating and combining video footage, audio, and graphics to create a cohesive and engaging final product, using software like Adobe Premiere Pro or Final Cut Pro. "
    },
    userFive = {
        isVerrified: true,
        profileURL: "./images/portrait.webp",
        profileName: "Adrina Calvo",
        jobTitle: ".Net Developer",
        jobDescription: "A .NET developer job description typically involves designing, developing, and maintaining software applications using the .NET framework, focusing on languages like C# and VB.NET, and often includes responsibilities like writing code, testing, debugging, and collaborating with teams. "
    },
    userSix = {
        isVerrified: true,
        profileURL: "./images/young-male-.avif",
        profileName: "Nicole Lewis",
        jobTitle: "Wordpress Developer",
        jobDescription: "Designing and managing the website back-end including database and server integration. Generating WordPress themes and plugins. Conducting."
    }
];

var inputOne = document.createElement("input");
container.appendChild(inputOne);
inputOne.setAttribute("type", "radio");
inputOne.setAttribute("name", "dot");
inputOne.setAttribute("id", "one");

var inputTwo = document.createElement("input");
container.appendChild(inputTwo);
inputTwo.setAttribute("type", "radio");
inputTwo.setAttribute("name", "dot");
inputTwo.setAttribute("id", "two");

var mainCard = document.createElement("div");
container.appendChild(mainCard);
mainCard.setAttribute("class", "main-card");

for (i = 0; i < 2; i++) {
    var cards = document.createElement("div");
    mainCard.appendChild(cards);
    cards.setAttribute("class", "cards");

    for (j = 0; j < 3; j++) {
        var card = document.createElement("div");
        cards.appendChild(card);
        card.setAttribute("class", "card");

        var content = document.createElement("div");
        card.appendChild(content);
        content.setAttribute("class", "content");

        var imgDiv = document.createElement("div");
        content.appendChild(imgDiv);
        imgDiv.setAttribute("class", "img");

        var img = document.createElement("img");
        imgDiv.appendChild(img);
        img.setAttribute("alt", "image");
        if (cardData[i + j * 2].profileURL === "") {
            img.setAttribute("src", "./images/download.png")
        } else {
            img.setAttribute("src", cardData[i + j * 2].profileURL);
        }

        if (cardData[i + j * 2].isVerrified === true) {
            var verificationIcon = document.createElement("img");
            content.appendChild(verificationIcon);
            verificationIcon.setAttribute("src", "./images/verify.png");
            verificationIcon.setAttribute("alt", "verified");
            verificationIcon.setAttribute("class", "verified");

        }

        var details = document.createElement("div");
        content.appendChild(details);
        details.setAttribute("class", "details");

        var uname = document.createElement("div");
        details.appendChild(uname);
        uname.setAttribute("class", "name");
        if (cardData[i + j * 2].profileName === "") {
            uname.innerHTML = "Username";
        } else {
            uname.innerHTML = cardData[i + j * 2].profileName;

        }

        var job = document.createElement("div");
        details.appendChild(job);
        job.setAttribute("class", "job");

        if (cardData[i + j * 2].jobTitle === "") {
            job.innerHTML = "Job Title"
        } else {
            job.innerHTML = cardData[i + j * 2].jobTitle;
        }

        var paragraph = document.createElement("div");
        details.appendChild(paragraph);
        paragraph.setAttribute("class", "paragraph");

        var insideParagraph = document.createElement("p");
        paragraph.appendChild(insideParagraph);
        if (cardData[i + j * 2].jobDescription === "") {
            insideParagraph.innerHTML = " Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatibus tempore quae in maxime? Repudiandae, eaque, praesentium adipisci doloremque illo necessitatibus dignissimos dolorum, iusto itaque labore eveniet vero magni molestiae.";
        } else {
            insideParagraph.innerHTML = cardData[i + j * 2].jobDescription;
        }


        var mediaIcons = document.createElement("div");
        content.appendChild(mediaIcons);
        mediaIcons.setAttribute("class", "media-icons");

        var anchorOne = document.createElement("a");
        mediaIcons.appendChild(anchorOne);
        anchorOne.setAttribute("href", "#");

        var facebook = document.createElement("i");
        anchorOne.appendChild(facebook);
        facebook.setAttribute("class", "fab fa-facebook-f");

        var anchorTwo = document.createElement("a");
        mediaIcons.appendChild(anchorTwo);
        anchorTwo.setAttribute("href", "#");

        var twitter = document.createElement("i");
        anchorTwo.appendChild(twitter);
        twitter.setAttribute("class", "fab fa-twitter");

        var anchorThree = document.createElement("a");
        mediaIcons.appendChild(anchorThree);
        anchorThree.setAttribute("href", "#");

        var instagram = document.createElement("i");
        anchorThree.appendChild(instagram);
        instagram.setAttribute("class", "fab fa-instagram");

        var anchorFour = document.createElement("a");
        mediaIcons.appendChild(anchorFour);
        anchorFour.setAttribute("href", "#");

        var youtube = document.createElement("i");
        anchorFour.appendChild(youtube);
        youtube.setAttribute("class", "fab fa-youtube");
    }
}


var button = document.createElement("div");
container.appendChild(button);
button.setAttribute("class", "button");

var labelOne = document.createElement("label");
button.appendChild(labelOne);
labelOne.setAttribute("for", "one");
labelOne.setAttribute("class", " active one");

var labelTwo = document.createElement("label");
button.appendChild(labelTwo);
labelTwo.setAttribute("for", "two");
labelTwo.setAttribute("class", "two");

