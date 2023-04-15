import React, { useState, useEffect } from "react";
export default function Caraosel() {
  return (
    <div class="carousel max-w-3xl mx-4 mb-4 relative">
      <div id="slide1" class="carousel-item relative w-full">
        <img
          src="https://image.tmdb.org/t/p/original/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg"
          class="w-full"
          alt="aa"
        />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" class="btn btn-ghost">
            ❮
          </a>
          <a href="#slide2" class="btn btn-ghost">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" class="carousel-item relative w-full">
        <img
          src="https://image.tmdb.org/t/p/original/Aa9TLpNpBMyRkD8sPJ7ACKLjt0l.jpg"
          class="w-full"
          alt="aa"
        />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" class="btn btn-ghost">
            ❮
          </a>
          <a href="#slide3" class="btn btn-ghost">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" class="carousel-item relative w-full">
        <img
          src="https://image.tmdb.org/t/p/original/xfNHRI2f5kHGvogxLd0C5sB90L7.jpg"
          class="w-full"
          alt="aa"
        />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" class="btn btn-ghost">
            ❮
          </a>
          <a href="#slide4" class="btn btn-ghost">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" class="carousel-item relative w-full">
        <img
          src="https://image.tmdb.org/t/p/original/vvObT0eIWGlArLQx3K5wZ0uT812.jpg"
          class="w-full"
          alt="aa"
        />
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" class="btn btn-ghost">
            ❮
          </a>
          <a href="#slide1" class="btn btn-ghost">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
}
