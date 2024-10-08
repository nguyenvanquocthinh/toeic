const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const nameSong = $(".nameSong_name");
const audio = $(".audio");
const translation = $(".type-help1");
const pronunciation = $(".type-help3");
const prevBtn = $(".prev");
const nextBtn = $(".next");

console.log(audio, translation, pronunciation);

const app = {
  currentIndex: 0,
  songs: [
    {
      name: "Test 1.1",
      path: "../../../assets/css/img/part1_test1_toeic/1.1.mp3",
      translation: "Một trong những người đàn ông đang viết tài liệu.",
      pronunciation: "One of the men is writing on a document.",
    },
    {
      name: "Test 1.2",
      path: "../../../assets/css/img/part1_test1_toeic/1.2.mp3",
      translation:
        "Một trong những người đàn ông đang kiểm tra đồng hồ của mình.",
      pronunciation: "One of the men is checking his watch.",
    },
    {
      name: "Test 1.3",
      path: "../../../assets/css/img/part1_test1_toeic/1.3.mp3",
      translation: "Một trong những người đàn ông đang nhìn vào ngăn kéo.",
      pronunciation: " One of the men is looking in a drawer.",
    },
    {
      name: "Test 1.4",
      path: "../../../assets/css/img/part1_test1_toeic/1.4.mp3",
      translation: "Một trong những người đàn ông đang đưa bút từ một hộp.",
      pronunciation: "One of the men is passing out pens from a box.",
    },
    {
      name: "Test 1.5",
      path: "../../../assets/css/img/part1_test1_toeic/1.5.mp3",
      translation: "Họ đang treo một bức tranh lên tường.",
      pronunciation: "They're hanging a picture on a wall.",
    },
    {
      name: "Test 1.6",
      path: "../../../assets/css/img/part1_test1_toeic/1.6.mp3",
      translation: "Họ đang dọn bàn ăn.",
      pronunciation: "They're setting the table.",
    },
    {
      name: "Test 1.7",
      path: "../../../assets/css/img/part1_test1_toeic/1.7.mp3",
      translation: "Họ đang mở một cửa sổ.",
      pronunciation: "They're opening a window.",
    },
    {
      name: "Test 1.8",
      path: "../../../assets/css/img/part1_test1_toeic/1.8.mp3",
      translation: "Họ đang sắp xếp lại một số đồ nội thất.",
      pronunciation: "They're rearranging some furniture.",
    },
    {
      name: "Test 1.9",
      path: "../../../assets/css/img/part1_test1_toeic/1.9.mp3",
      translation: "Cô ấy đang cất chiếc kính hiển vi đi.",
      pronunciation: "She's putting away a microscope.",
    },
    {
      name: "Test 1.10",
      path: "../../../assets/css/img/part1_test1_toeic/1.10.mp3",
      translation: "Cô ấy đang cởi áo khoác.",
      pronunciation: "She's taking off a coat.",
    },
    {
      name: "Test 1.11",
      path: "../../../assets/css/img/part1_test1_toeic/1.11.mp3",
      translation: "Cô ấy đang kiểm tra một số kính bảo hộ.",
      pronunciation: "She's examining some safety glasses.",
    },
    {
      name: "Test 1.12",
      path: "../../../assets/css/img/part1_test1_toeic/1.12.mp3",
      translation: "Cô ấy đang sử dụng một số thiết bị trong phòng thí nghiệm.",
      pronunciation: " She's using some laboratory equipment.",
    },
    {
      name: "Test 1.13",
      path: "../../../assets/css/img/part1_test1_toeic/1.13.mp3",
      translation: "Một người đàn ông đang đẩy một chiếc xe đẩy hàng.",
      pronunciation: "A man is pushing a shopping cart.",
    },
    {
      name: "Test 1.14",
      path: "../../../assets/css/img/part1_test1_toeic/1.14.mp3",
      translation: "Một người đàn ông đang chờ mua hàng.",
      pronunciation: "A man is waiting to make a purchase.",
    },
    {
      name: "Test 1.15",
      path: "../../../assets/css/img/part1_test1_toeic/1.15.mp3",
      translation: " Một người đàn ông đang cầm một số hàng hóa.",
      pronunciation: "A man is holding some merchandise.",
    },
    {
      name: "Test 1.16",
      path: "../../../assets/css/img/part1_test1_toeic/1.16.mp3",
      translation: "Một người đàn ông đang lắp ráp một số kệ.",
      pronunciation: "A man is assembling some shelves.",
    },
    {
      name: "Test 1.17",
      path: "../../../assets/css/img/part1_test1_toeic/1.17.mp3",
      translation: "Một số khách hàng đang rời khỏi cửa hàng.",
      pronunciation: "Some customers are leaving a shop.",
    },
    {
      name: "Test 1.18",
      path: "../../../assets/css/img/part1_test1_toeic/1.18.mp3",
      translation: "Một khu vực chỗ ngồi được trang trí bằng cây cối.",
      pronunciation: "A seating area is decorated with plants.",
    },
    {
      name: "Test 1.19",
      path: "../../../assets/css/img/part1_test1_toeic/1.19.mp3",
      translation: "Một công nhân đang sửa chữa một số thiết bị chiếu sáng.",
      pronunciation: "A worker is repairing some light fixtures.",
    },
    {
      name: "Test 1.20",
      path: "../../../assets/css/img/part1_test1_toeic/1.20.mp3",
      translation: " Một chiếc ghế dài đang được chuyển vào một góc.",
      pronunciation: "A bench is being moved into a corner.",
    },
    {
      name: "Test 1.21",
      path: "../../../assets/css/img/part1_test1_toeic/1.21.mp3",
      translation: "Một số va li đang được chất lên xe buýt.",
      pronunciation: "Some suitcases are being loaded onto a bus.",
    },
    {
      name: "Test 1.22",
      path: "../../../assets/css/img/part1_test1_toeic/1.22.mp3",
      translation: "Một số người đang băng qua ngã tư.",
      pronunciation: "Some people are crossing an intersection.",
    },
    {
      name: "Test 1.23",
      path: "../../../assets/css/img/part1_test1_toeic/1.23.mp3",
      translation: "Một số xe buýt đang đậu trong gara.",
      pronunciation: "Some buses are parked in a garage.",
    },
    {
      name: "Test 1.24",
      path: "../../../assets/css/img/part1_test1_toeic/1.24.mp3",
      translation: "Một số người đang xếp hàng ở bên đường.",
      pronunciation: "Some people are lined up at the side of a road.",
    },
  ],

  //   render: function () {
  //     const htmls = this.songs.map((song) => {
  //       return `
  //                     <div class="">
  //               <div class="playlist">
  //                 <button class="prev">
  //                   <i
  //                     class="fa-solid fa-forward fa-rotate-180 fa-xl"
  //                     style="color: #000000"
  //                   ></i>
  //                 </button>
  //                 <div class="playlist__audio">
  //                   <audio
  //                     class="audio"
  //                     controls
  //                     src="${song.path}"
  //                   ></audio>
  //                 </div>
  //                 <button onclick() class="next">
  //                   <i class="fa-solid fa-forward fa-xl" style="color: #000000"></i>
  //                 </button>
  //               </div>

  //               <div class="form_input">
  //                 <input
  //                   class="input active"
  //                   id="text"
  //                   type="text"
  //                   placeholder="Type what you hear..."
  //                 />
  //               </div>

  //               <div class="form_button">
  //                 <button>Help</button>
  //                 <button>Check</button>
  //               </div>
  //             </div>

  //             <div class="help">
  //               <div class="help__translate">
  //                 <i class="fa-solid fa-language fa-2xl" style="color: #000000"></i>
  //                 <span>Vietnamese Translation</span>
  //                 <p class="type-help">
  //                   Complete the challenge or click
  //                   <a onclick="vietnamese()" style="color: red" href=""> here </a>
  //                   to show.
  //                 </p>
  //               </div>
  //               <script>
  //                 const closed = document.getElementById("closed");
  //                 function vietnamese() {
  //                   closed.style.display = "none";
  //                 }
  //               </script>

  //               <div id="closed" class="help__translate1">
  //                 <i class="fa-solid fa-language fa-2xl" style="color: #000000"></i>
  //                 <span>Vietnamese Translation</span>
  //                 <p class="type-help">${song.translation}</p>
  //               </div>

  //               <div class="help__translate2">
  //                 <i
  //                   class="fa-brands fa-soundcloud fa-2xl"
  //                   style="color: #000000"
  //                 ></i>
  //                 <span>Pronunciation </span>
  //                 <p class="type-help">
  //                   Complete the challenge or click
  //                   <a onclick="closedHeader1()" style="color: red" href=""> here </a>
  //                   to show.
  //                 </p>
  //               </div>
  //               <script>
  //                 const header1 = document.getElementById("header1");
  //                 function closedHeader1() {
  //                   header1.style.display = "block";
  //                 }
  //               </script>

  //               <div id="header1" class="help__translate3">
  //                 <i
  //                   class="fa-brands fa-soundcloud fa-2xl"
  //                   style="color: #000000"
  //                 ></i>
  //                 <span>Pronunciation </span>
  //                 <p class="type-help">${song.pronunciation}</p>
  //               </div>
  //             </div>
  //               `;
  //     });
  //     $(".form").innerHTML = htmls.join("");
  //   },

  defineProperties: function () {
    Object.defineProperty(this, "currentSong", {
      get: function () {
        return this.songs[this.currentIndex];
      },
    });
  },

  handleEvents: function () {
    const _this = this;

    // khi next
    nextBtn.onclick = function () {
      _this.nextSong();
      audio.play();
    };

    // khi prev song
    prevBtn.onclick = function () {
      _this.prevSong();
      audio.play();
    };
  },

  nextSong: function () {
    this.currentIndex++;
    if (this.currentIndex >= this.songs.length) {
      //   this.currentIndex = 0;
      this.currentIndex = this.songs.length - 1;
    }
    this.loadCurrentSong();
  },

  prevSong: function () {
    this.currentIndex--;
    if (this.currentIndex < 0) {
      //   this.currentIndex = this.songs.length - 1;
      this.currentIndex = 0;
    }
    this.loadCurrentSong();
  },

  loadCurrentSong: function () {
    nameSong.textContent = this.currentSong.name;
    audio.src = this.currentSong.path;
    translation.textContent = this.currentSong.translation;
    pronunciation.textContent = this.currentSong.pronunciation;
  },

  start: function () {
    //định nghĩa các thuộc tính cho object
    this.defineProperties();

    //lắng nghe và xử lý các sự kiện
    this.handleEvents();

    //tải thông tin bài hát đầu tiên vào UI khi chạy ứng dụng
    this.loadCurrentSong();

    //render form
    // this.render();
  },
};

app.start();
