const VideoCard = () => {
    return (
        <article class="card video-card card-shadow p-5 b-radius-2">
      <section
        class="video-card-image-container card-image-container flex-row justify-content-center align-center flex-wrap b-radius-2"
      >
        <img
          src="https://i.ytimg.com/vi/PJSnBPGtjMI/hq720_live.jpg?sqp=CPCsgZIG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCOzwX6DbFKcZ_VqZ9eMQJEOUoLDg"
          alt="Puma Sneakers"
          class="video-card-image b-radius-2"
        />
      </section>
      <section class="flex-row justify-content-start align-start">
        <section>
          <img
            src="https://yt3.ggpht.com/ytc/AKedOLSAAX9t_iv6FTNCV1r83YQC7gBJZNcQ0sKq9yZs3Q=s68-c-k-c0x00ffffff-no-rj"
            alt="User Profile Picture"
            class="avatar b-radius-circle l my-5"
            aria-label="User Profile Avatar"
          />
        </section>
        <section class="card-content p-5 pb-0">
          <h3 class="card-title text-wrap">
            COMEDIANS ON BOARD GANG WAR | GRAND FINALE
          </h3>
          <p class="card-category py-5">
            Samay Raina <i class="fa-solid fa-circle-check mx-2 text-cta-color"></i>
          </p>
          <span
            class="card-price-tag flex-row align-center flex-gap-half text-bold"
          >
            <p class="p-0 m-0">
              24K views
            </p>
            <i class="fa-solid fa-circle"></i>
            <p class="time p-0 m-0">2 days ago</p>
          </span>
        </section>
      </section>
      <section
        class="video-btn-container flex-row justify-content-center flex-wrap"
      >
        <button
          class="primary-btn p-5 b-radius-2 text-bold card-watchlater m-5 flex-row justify-content-center align-center flex-gap-1 flex-grow-1"
        >
          <span class="wishlist-icon"
            ><i class="fas fa-folder-plus social"></i
          ></span>
          <p>Add to Playlist</p>
        </button>
        <button
          class="outline-btn p-5 b-radius-2 text-bold card-watchlater m-5 flex-row justify-content-center align-center flex-gap-1 flex-grow-1"
        >
          <span class="wishlist-icon"
            ><i class="fa-solid fa-clock social"></i
          ></span>
          <p>Watch later</p>
        </button>
      </section>
    </article>
    )
}