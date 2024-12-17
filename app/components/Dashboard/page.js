'use client'

import React, { useState } from 'react';
import Image from 'next/image';
import styles from '@/app/styles/dashboard.module.css';

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true); 

    const apiKey = 'SR0kwpty6ocde4dBBN4VRIkzyuaU5ZWk'; 
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${searchTerm}&limit=5`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.data) {
        setGifs(data.data);
      } else {
        setGifs([]);
      }
    } catch (error) {
      console.error('Error fetching GIFs:', error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Search GIFs</h1>
        <div onClick={() => { localStorage.removeItem('isLoggedIn'); window.location.reload(); }} className={styles.logout}>
          Logout
        </div>
      </div>

      <div className={styles.card}>
        <form onSubmit={handleSearch} className={styles.form}>
          <div className={styles.formGroup}>
            <label>Search GIFs:</label>
            <input type="text" value={searchTerm} onChange={handleChange} />
          </div>

          <button type="submit" className={styles.button}>
            Search GIFs
          </button>
        </form>
      </div>

      <div className={styles.results}>
        {loading ? (
          <div className={styles.spinner}></div> 
        ) : gifs.length > 0 ? (
          gifs.map((gif) => (
            <div key={gif.id} className={styles.resultCard}>
              <h3>{gif.title}</h3>
              <div className={styles.imageWrapper}>
                <Image 
                  src={gif.images.fixed_height.url} 
                  alt={gif.title} 
                  width={gif.images.fixed_height.width} 
                  height={gif.images.fixed_height.height} 
                  priority={true} 
                />
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
