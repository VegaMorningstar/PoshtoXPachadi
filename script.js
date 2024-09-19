document.addEventListener("DOMContentLoaded", function() {
    const imageFolder = 'ImagesX/';
    const imageFiles = [
        'image (1).jpg',
        'image (2).jpg',
        'image (3).jpg',
        'image (4).jpg',
        'image (5).jpg',
        'image (6).jpg',
        'image (7).jpg',
        'image (8).jpg',
        'image (9).jpg',
        'image (10).jpg',
        'image (11).jpg',
        'image (12).jpg',
        'image (13).jpg',
        'image (14).jpg',
        'image (15).jpg',
        'image (16).jpg',
        'image (17).jpg',
        'image (18).jpg',
        'image (19).jpg',
        'image (20).jpg',
        'image (21).jpg',
        'image (22).jpg',
        'image (23).jpg',
        'image (24).jpg',
        'image (25).jpg',
        'image (26).jpg',
        'image (27).jpg',
        'image (28).jpg',
        'image (29).jpg',
        'image (30).jpg',
        'image (31).jpg',
        'image (32).jpg',
        'image (33).jpg',
        'image (34).jpg',
        'image (35).jpg',
        'image (36).jpg',
        'image (37).jpg',
        'image (38).jpg',
        'image (39).jpg',
        'image (40).jpg',
        'image (41).jpg',
        'image (42).jpg',
        'image (43).jpg',
        'image (44).jpg',
        'image (45).jpg',
        'image (46).jpg',
        'image (47).jpg',
        'image (48).jpg',
        'image (49).jpg',
        'image (50).jpg',
        'image (51).jpg',
        'image (52).jpg',
        'image (53).jpg',
        'image (54).jpg',
        'image (55).jpg',
        'image (56).jpg',
        'image (57).jpg',
        'image (58).jpg',
        'image (59).jpg',
        'image (60).jpg',
        'image (61).jpg',
        'image (62).jpg',
        'image (63).jpg',
        'image (64).jpg',
        'image (65).jpg',
        'image (66).jpg',
        'image (67).jpg',
        'image (68).jpg',
        'image (69).jpg',
        'image (70).jpg',
        'image (71).jpg',
        'image (72).jpg',
        'image (73).jpg',
        'image (74).jpg',
        'image (75).jpg',
        'image (76).jpg',
        'image (77).jpg',
        'image (78).jpg',
        'image (79).jpg',
        'image (80).jpg',
        'image (81).jpg',
        'image (82).jpg',
        'image (83).jpg',
        'image (84).jpg',
        'image (85).jpg',
        'image (86).jpg',
        'image (87).jpg',
        'image (88).jpg',
        'image (89).jpg',
        'image (90).jpg',
        'image (91).jpg',
        'image (92).jpg',
        'image (93).jpg',
        'image (94).jpg',
        'image (95).jpg',
        'image (96).jpg',
        'image (97).jpg',
        'image (98).jpg',
        'image (99).jpg',
        'image (100).jpg',
        'image (101).jpg',
        'image (102).jpg',
        'image (103).jpg',
        'image (104).jpg',
        'image (105).jpg',
        'image (106).jpg',
        'image (107).jpg',
        'image (108).jpg',
        'image (109).jpg',
        'image (110).jpg',
        'image (111).jpg',
        'image (112).jpg',
        'image (113).jpg',
        'image (114).jpg',
        'image (115).jpg',
        'image (116).jpg',
        'image (117).jpg',
        'image (118).jpg',
        'image (119).jpg',
        'image (120).jpg',
        'image (121).jpg',
        'image (122).jpg',
        'image (123).jpg',
        'image (124).jpg',
        'image (125).jpg',
        'image (126).jpg',
        'image (127).jpg',
        'image (128).jpg',
        'image (129).jpg',
        'image (130).jpg',
        'image (131).jpg',
        'image (132).jpg',
        'image (133).jpg',
        'image (134).jpg',
        'image (135).jpg',
        'image (136).jpg',
        'image (137).jpg',
        'image (138).jpg',
        'image (139).jpg',
        'image (140).jpg',
        'image (141).jpg',
        'image (142).jpg',
        'image (143).jpg',
        'image (144).jpg',
        'image (145).jpg',
        'image (146).jpg',
        'image (147).jpg',
        'image (148).jpg',
        'image (149).jpg',
        'image (150).jpg',
        'image (151).jpg',
        'image (152).jpg',
        'image (153).jpg',
        'image (154).jpg',
        'image (155).jpg',
        'image (156).jpg'
        // Add more image filenames as needed
    ];

    const profilePostsContainer = document.getElementById('profile-posts');
    let currentIndex = 0; // Track the current image index

    imageFiles.forEach(function(imageFile, index) {
        const imgElement = document.createElement('img');
        imgElement.src = imageFolder + imageFile;
        imgElement.alt = "Post Image";
        imgElement.classList.add('post-image');

        const postDiv = document.createElement('div');
        postDiv.classList.add('post');
        postDiv.appendChild(imgElement);

        profilePostsContainer.appendChild(postDiv);

        // Add event listener to open the modal on click
        imgElement.addEventListener('click', function() {
            openModal(index);
        });
    });

    const modal = document.getElementById('imageModal');
    const modalImg = document.getElementById("modalImage");
    const downloadBtn = document.getElementById("downloadBtn");
    const closeModal = document.getElementsByClassName("close")[0];
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    function openModal(index) {
        currentIndex = index;
        modal.style.display = "block";
        modalImg.src = imageFolder + imageFiles[currentIndex];
        downloadBtn.href = imageFolder + imageFiles[currentIndex]; // Set the download link
        downloadBtn.setAttribute("download", imageFiles[currentIndex]);
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % imageFiles.length;
        openModal(currentIndex);
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + imageFiles.length) % imageFiles.length;
        openModal(currentIndex);
    }

    closeModal.onclick = function() {
        modal.style.display = "none";
    }

    prevBtn.onclick = function() {
        showPrevImage();
    }

    nextBtn.onclick = function() {
        showNextImage();
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});




// fireworks

document.addEventListener("DOMContentLoaded", function() {
    // Fireworks logic
    const canvas = document.getElementById('fireworksCanvas');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    function random(min, max) {
        return Math.random() * (max - min) + min;
    }

    function Firework(x, y) {
        this.x = x;
        this.y = y;
        this.sparks = [];

        for (let i = 0; i < 100; i++) {
            this.sparks.push({
                x: this.x,
                y: this.y,
                dx: random(-2, 2),
                dy: random(-2, 2),
                size: random(1, 3),
                alpha: 1,
                color: `hsl(${Math.floor(random(0, 360))}, 100%, 50%)`
            });
        }
    }

    Firework.prototype.update = function() {
        this.sparks.forEach((spark, index) => {
            spark.x += spark.dx;
            spark.y += spark.dy;
            spark.alpha -= 0.01;
            if (spark.alpha <= 0) {
                this.sparks.splice(index, 1);
            }
        });
    }

    Firework.prototype.draw = function() {
        this.sparks.forEach(spark => {
            ctx.globalAlpha = spark.alpha;
            ctx.fillStyle = spark.color;
            ctx.beginPath();
            ctx.arc(spark.x, spark.y, spark.size, 0, Math.PI * 2);
            ctx.fill();
        });
    }

    const fireworks = [];

    function createFirework() {
        fireworks.push(new Firework(random(0, canvas.width), random(0, canvas.height)));
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        fireworks.forEach((firework, index) => {
            firework.update();
            firework.draw();

            if (firework.sparks.length === 0) {
                fireworks.splice(index, 1);
            }
        });

        requestAnimationFrame(animate);
    }

    setInterval(createFirework, 500);
    animate();

    // Delay hiding the loading screen by 5 seconds with a smooth fade-out transition
    window.onload = function() {
        setTimeout(function() {
            const loadingScreen = document.getElementById('loading-screen');
            loadingScreen.style.opacity = '0'; // Start the fade-out transition

            // Wait for the transition to end before hiding the loading screen
            setTimeout(function() {
                loadingScreen.style.display = 'none';
                document.getElementById('profile-container').style.display = 'block';
            }, 100); // Matches the duration of the fade-out transition (1s)
        }, 3000); // 5000 milliseconds = 5 seconds
    }
});