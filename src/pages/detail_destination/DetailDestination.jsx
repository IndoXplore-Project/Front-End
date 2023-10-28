import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./detail-destination.css";
import Swiper from "swiper";
import { AiOutlineStar } from "react-icons/ai";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function DetailDestination() {
  const [destination, setDestination] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://indoxplore-project.cyclic.app/api/destinations/${id}`
        );
        const json = await result.json();

        if (json.data) {
          setDestination(json.data);
          new Swiper(".mySwiper", {
            slidesPerView: 1,
            spaceBetween: 10,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            breakpoints: {
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            },
          });
        } else {
          console.error("Destination not found");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  if (!destination) {
    return <div>Loading...</div>; // Menampilkan pesan loading saat data sedang dimuat
  }

  return (
    <div className="detail_destination container">
      <h1>{destination.name}</h1>
      <div className="detail_destination_main grid">
        <div className="detail_destination_content">
          <img src={destination.gallery[0]} alt="" />
          <div className="detail_destination_item">
            <h3>Description</h3>
            <p>{destination.description}</p>
          </div>
          <div className="detail_destination_item">
            <h3>Activities</h3>
            <p>
              {destination.activities.map((data, index) => (
                <span key={index}>
                  {index === destination.activities.length - 1
                    ? `and ${data}.`
                    : `${data}, `}
                </span>
              ))}
            </p>
          </div>
          <div className="detail_destination_item">
            <h3>Facilities and Services</h3>
            <p>
              {destination.facilitiesAndServices.map((data, index) => (
                <span key={index}>
                  {index === destination.facilitiesAndServices.length - 1
                    ? `and ${data}.`
                    : `${data}, `}
                </span>
              ))}
            </p>
          </div>
          <div className="detail_destination_item">
            <h3>Weather Characteristics</h3>
            <p>{destination.weatherCharacteristics}</p>
          </div>
          <div className="detail_destination_item">
            <h3>Transportation</h3>
            <ul>
              {destination.transportation.map((data, index) => (
                <li key={index}>
                  <p>{data}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="detail_destination_item">
            <h3>Best Time to Visit</h3>
            <p>{destination.bestTimeToVisit}</p>
          </div>
          <div className="detail_destination_item">
            <h3>Local Tips and Advice</h3>
            <ul>
              {destination.localTipsAndAdvice.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="detail_destination_info">
          <div className="info_main">
            <div className="info_top">
              <Link to={`/categories/${destination.category}`}>
                <p className="info_category">{destination.categoryName}</p>
              </Link>
              <div className="rating">
                <AiOutlineStar />
                <span>4,7</span>
              </div>
            </div>
            <p>
              <span>Province</span> : {destination.province}
            </p>
            <p>
              <span>Address</span> : {destination.address}
            </p>
            <p>
              <span>Operational Time</span> : {destination.operationalTime}
            </p>
            <p>
              <span>Ticket</span> :{" "}
              {destination.ticket[0] === 0 && destination.ticket[1] === 0
                ? "free"
                : `${destination.ticket[0]} ~ ${destination.ticket[1]}`}
            </p>
            <p>
              <span>Contact Information</span> :{" "}
              {destination.contactInformation}
            </p>
          </div>
          <div className="info_maps">
            <MapContainer
              center={[
                destination.geoLocation.lat,
                destination.geoLocation.long,
              ]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                position={[
                  destination.geoLocation.lat,
                  destination.geoLocation.long,
                ]}
              >
                <Popup>This's the location.</Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
      </div>
      <div className="gallery-destination">
        <h2>Gallery</h2>
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            {destination.gallery.map((image, index) => (
              <div className="swiper-slide" key={index}>
                <img src={image} alt={`Image ${index}`} />
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
    </div>
  );
}

export default DetailDestination;
