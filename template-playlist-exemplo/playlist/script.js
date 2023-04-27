// Một số bài hát có thể bị lỗi do liên kết bị hỏng. Vui lòng thay thế liên kết khác để có thể phát
// Some songs may be faulty due to broken links. Please replace another link so that it can be played

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const PlAYER_STORAGE_KEY = "F8_PLAYER";

const player = $(".player");
const cd = $(".cd");
const heading = $("header h2");
const cdThumb = $(".cd-thumb");
const audio = $("#audio");
const playBtn = $(".btn-toggle-play");
const progress = $("#progress");
const prevBtn = $(".btn-prev");
const nextBtn = $(".btn-next");
const randomBtn = $(".btn-random");
const repeatBtn = $(".btn-repeat");
const playlist = $(".playlist");

const app = {
  currentIndex: 0,
  isPlaying: false,
  isRandom: false,
  isRepeat: false,
  config: {},
  // (1/2) Uncomment the line below to use localStorage
  // config: JSON.parse(localStorage.getItem(PlAYER_STORAGE_KEY)) || {},
  songs: [
    {
      name: "mp3331",
      singer: "Artista - 1",
      path: "https://rebrand.ly/mp3331",
      image: "../../assets/imagens/imagem1.jpg"
    },
    {
      name: "mp3332",
      singer: "Artista - 2",
      path: "https://rebrand.ly/mp3332",
      image:
        "../../assets/imagens/imagem4.jpg"
    },
    {
      name: "mp3333",
      singer: "Artista - 3",
      path:
        "https://rebrand.ly/mp3333",
      image: "../../assets/imagens/imagem7.jpg"
    },
    {
      name: "mp3334",
      singer: "Artista - 4",
      path: "https://rebrand.ly/mp3334",
      image:
        "../../assets/imagens/imagem8.jpg"
    },
    {
      name: "mp3335",
      singer: "Artista - 5",
      path: "https://rebrand.ly/mp3335",
      image:
        "../../assets/imagens/imagem9.jpg"
    },
    {
      name: "mp3336",
      singer: "Artista - 6",
      path:
        "https://rebrand.ly/mp3336",
      image:
        "../../assets/imagens/imagem10.jpg"
    },
    {
      name: "mp3337",
      singer: "Artista - 7",
      path: "https://rebrand.ly/mp3337",
      image:
        "../../assets/imagens/imagem11.jpg"
    },
	{
      name: "mp3338",
      singer: "Artista - 8",
      path: "https://rebrand.ly/mp3338",
      image: "../../assets/imagens/imagem1.jpg"
    },
    {
      name: "mp3339",
      singer: "Artista - 9",
      path: "https://rebrand.ly/mp3339",
      image:
        "../../assets/imagens/imagem4.jpg"
    },
    {
      name: "mp33310",
      singer: "Artista - 10",
      path:
        "https://rebrand.ly/mp33310",
      image: "../../assets/imagens/imagem7.jpg"
    },
    {
      name: "mp33311",
      singer: "Artista - 11",
      path: "https://rebrand.ly/mp33311",
      image:
        "../../assets/imagens/imagem8.jpg"
    },
    {
      name: "mp33312",
      singer: "Artista - 12",
      path: "https://rebrand.ly/mp33312",
      image:
        "../../assets/imagens/imagem9.jpg"
    },
    {
      name: "mp33313",
      singer: "Artista - 13",
      path:
        "https://rebrand.ly/mp33313",
      image:
        "../../assets/imagens/imagem10.jpg"
    },
    {
      name: "mp33314",
      singer: "Artista - 14",
      path: "https://rebrand.ly/mp33314",
      image:
        "../../assets/imagens/imagem11.jpg"
    },
	{
      name: "mp33315",
      singer: "Artista - 15",
      path: "https://rebrand.ly/mp33315",
      image: "../../assets/imagens/imagem1.jpg"
    },
    {
      name: "mp33316",
      singer: "Artista - 16",
      path: "https://rebrand.ly/mp33316",
      image:
        "../../assets/imagens/imagem4.jpg"
    },
    {
      name: "mp33317",
      singer: "Artista - 17",
      path:
        "https://rebrand.ly/mp33317",
      image: "../../assets/imagens/imagem7.jpg"
    },
    {
      name: "mp33318",
      singer: "Artista - 18",
      path: "https://rebrand.ly/mp33318",
      image:
        "../../assets/imagens/imagem8.jpg"
    },
    {
      name: "mp33319",
      singer: "Artista - 19",
      path: "https://rebrand.ly/mp33319",
      image:
        "../../assets/imagens/imagem9.jpg"
    },
    {
      name: "mp33320",
      singer: "Artista - 20",
      path:
        "https://rebrand.ly/mp33320",
      image:
        "../../assets/imagens/imagem10.jpg"
    },
    {
      name: "mp33321",
      singer: "Artista - 21",
      path: "https://rebrand.ly/mp33321",
      image:
        "../../assets/imagens/imagem11.jpg"
    },
	{
      name: "mp33322",
      singer: "Artista - 22",
      path: "https://rebrand.ly/mp33322",
      image: "../../assets/imagens/imagem1.jpg"
    },
    {
      name: "mp33323",
      singer: "Artista - 23",
      path: "https://rebrand.ly/mp33323",
      image:
        "../../assets/imagens/imagem4.jpg"
    },
    {
      name: "mp33324",
      singer: "Artista - 24",
      path:
        "https://rebrand.ly/mp33324",
      image: "../../assets/imagens/imagem7.jpg"
    },
    {
      name: "mp33325",
      singer: "Artista - 25",
      path: "https://rebrand.ly/mp33325",
      image:
        "../../assets/imagens/imagem8.jpg"
    },
    {
      name: "mp33326",
      singer: "Artista - 26",
      path: "https://rebrand.ly/mp33326",
      image:
        "../../assets/imagens/imagem9.jpg"
    },
    {
      name: "mp33327",
      singer: "Artista - 27",
      path:
        "https://rebrand.ly/mp33327",
      image:
        "../../assets/imagens/imagem10.jpg"
    },
    {
      name: "mp33328",
      singer: "Artista - 28",
      path: "https://rebrand.ly/mp33328",
      image:
        "../../assets/imagens/imagem11.jpg"
    },
	{
      name: "mp33329",
      singer: "Artista - 29",
      path:
        "https://rebrand.ly/mp33329",
      image:
        "../../assets/imagens/imagem1.jpg"
    },
    {
      name: "mp33330",
      singer: "Artista - 30",
      path: "https://rebrand.ly/mp33330",
      image:
        "../../assets/imagens/imagem14.jpg"
    }
  ],
  setConfig: function (key, value) {
    this.config[key] = value;
    // (2/2) Uncomment the line below to use localStorage
    // localStorage.setItem(PlAYER_STORAGE_KEY, JSON.stringify(this.config));
  },
  render: function () {
    const htmls = this.songs.map((song, index) => {
      return `
                        <div class="song ${
                          index === this.currentIndex ? "active" : ""
                        }" data-index="${index}">
                            <div class="thumb"
                                style="background-image: url('${song.image}')">
                            </div>
                            <div class="body">
                                <h3 class="title">${song.name}</h3>
                                <p class="author">${song.singer}</p>
                            </div>
                            <div class="option">
                                <i class="fas fa-ellipsis-h"></i>
                            </div>
                        </div>
                    `;
    });
    playlist.innerHTML = htmls.join("");
  },
  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      }
    });
  },
  handleEvents: function () {
    const _this = this;
    const cdWidth = cd.offsetWidth;

    // Xử lý CD quay / dừng
    // Handle CD spins / stops
    const cdThumbAnimate = cdThumb.animate([{ transform: "rotate(360deg)" }], {
      duration: 10000, // 10 seconds
      iterations: Infinity
    });
    cdThumbAnimate.pause();

    // Xử lý phóng to / thu nhỏ CD
    // Handles CD enlargement / reduction
    document.onscroll = function () {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const newCdWidth = cdWidth - scrollTop;

      cd.style.width = newCdWidth > 0 ? newCdWidth + "px" : 0;
      cd.style.opacity = newCdWidth / cdWidth;
    };

    // Xử lý khi click play
    // Handle when click play
    playBtn.onclick = function () {
      if (_this.isPlaying) {
        audio.pause();
      } else {
        audio.play();
      }
    };

    // Khi song được play
    // When the song is played
    audio.onplay = function () {
      _this.isPlaying = true;
      player.classList.add("playing");
      cdThumbAnimate.play();
    };

    // Khi song bị pause
    // When the song is pause
    audio.onpause = function () {
      _this.isPlaying = false;
      player.classList.remove("playing");
      cdThumbAnimate.pause();
    };

    // Khi tiến độ bài hát thay đổi
    // When the song progress changes
    audio.ontimeupdate = function () {
      if (audio.duration) {
        const progressPercent = Math.floor(
          (audio.currentTime / audio.duration) * 100
        );
        progress.value = progressPercent;
      }
    };

    // Xử lý khi tua song
    // Handling when seek
    progress.onchange = function (e) {
      const seekTime = (audio.duration / 100) * e.target.value;
      audio.currentTime = seekTime;
    };

    // Khi next song
    // When next song
    nextBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.nextSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Khi prev song
    // When prev song
    prevBtn.onclick = function () {
      if (_this.isRandom) {
        _this.playRandomSong();
      } else {
        _this.prevSong();
      }
      audio.play();
      _this.render();
      _this.scrollToActiveSong();
    };

    // Xử lý bật / tắt random song
    // Handling on / off random song
    randomBtn.onclick = function (e) {
      _this.isRandom = !_this.isRandom;
      _this.setConfig("isRandom", _this.isRandom);
      randomBtn.classList.toggle("active", _this.isRandom);
    };

    // Xử lý lặp lại một song
    // Single-parallel repeat processing
    repeatBtn.onclick = function (e) {
      _this.isRepeat = !_this.isRepeat;
      _this.setConfig("isRepeat", _this.isRepeat);
      repeatBtn.classList.toggle("active", _this.isRepeat);
    };

    // Xử lý next song khi audio ended
    // Handle next song when audio ended
    audio.onended = function () {
      if (_this.isRepeat) {
        audio.play();
      } else {
        nextBtn.click();
      }
    };

    // Lắng nghe hành vi click vào playlist
    // Listen to playlist clicks
    playlist.onclick = function (e) {
      const songNode = e.target.closest(".song:not(.active)");

      if (songNode || e.target.closest(".option")) {
        // Xử lý khi click vào song
        // Handle when clicking on the song
        if (songNode) {
          _this.currentIndex = Number(songNode.dataset.index);
          _this.loadCurrentSong();
          _this.render();
          audio.play();
        }

        // Xử lý khi click vào song option
        // Handle when clicking on the song option
        if (e.target.closest(".option")) {
        }
      }
    };
  },
  scrollToActiveSong: function () {
    setTimeout(() => {
      $(".song.active").scrollIntoView({
        behavior: "smooth",
        block: "nearest"
      });
    }, 300);
  },
  loadCurrentSong: function () {
    heading.textContent = this.currentSong.name;
    cdThumb.style.backgroundImage = `url('${this.currentSong.image}')`;
    audio.src = this.currentSong.path;
  },
  loadConfig: function () {
    this.isRandom = this.config.isRandom;
    this.isRepeat = this.config.isRepeat;
  },
  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },
  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },
  playRandomSong: function () {
    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.songs.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;
    this.loadCurrentSong();
  },
  start: function () {
    // Gán cấu hình từ config vào ứng dụng
    // Assign configuration from config to application
    this.loadConfig();

    // Định nghĩa các thuộc tính cho object
    // Defines properties for the object
    this.defineProperties();

    // Lắng nghe / xử lý các sự kiện (DOM events)
    // Listening / handling events (DOM events)
    this.handleEvents();

    // Tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    // Load the first song information into the UI when running the app
    this.loadCurrentSong();

    // Render playlist
    this.render();

    // Hiển thị trạng thái ban đầu của button repeat & random
    // Display the initial state of the repeat & random button
    randomBtn.classList.toggle("active", this.isRandom);
    repeatBtn.classList.toggle("active", this.isRepeat);
  }
};

app.start();