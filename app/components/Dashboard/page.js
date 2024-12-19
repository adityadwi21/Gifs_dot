"use client";

import React, { useState } from "react";
import Image from "next/image";
import styles from "@/app/styles/dashboard.module.css";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!searchTerm.trim()) {
      setError("Please enter a search term");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`/api/searchGifs?q=${searchTerm}`);
      const data = await response.json();

      if (data.data) {
        setGifs(data.data);
      } else {
        setGifs([]);
      }
    } catch (error) {
      console.error("Error fetching GIFs:", error);
      setError("Failed to fetch GIFs. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.reload();
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Search GIFs</h1>
        <div onClick={handleLogout} className={styles.logout}>
          Logout
        </div>
      </div>

      <div className={styles.card}>
        <form onSubmit={handleSearch} className={styles.form}>
          <div className={styles.formGroup}>
            <label htmlFor="search">Search GIFs:</label>
            <input id="search" type="text" value={searchTerm} onChange={handleChange} placeholder="Enter a keyword" />
          </div>

          <button type="submit" className={styles.button}>
            Search GIFs
          </button>
        </form>
      </div>

      <div className={styles.results}>
        {loading ? (
          <div className={styles.spinner}></div>
        ) : error ? (
          <p className={styles.error}>{error}</p>
        ) : gifs.length > 0 ? (
          gifs.map((gif) => (
            <div key={gif.id} className={styles.resultCard}>
              <h3>{gif.title || "Untitled GIF"}</h3>
              <div className={styles.imageWrapper}>
                <Image src={gif.images.fixed_height.url} alt={gif.title || "GIF"} width={parseInt(gif.images.fixed_height.width, 10) || 200} height={parseInt(gif.images.fixed_height.height, 10) || 200} priority />
              </div>
            </div>
          ))
        ) : (
          <p>No GIFs found</p>
        )}
      </div>
    </div>
  );
}
