import React, { useEffect } from "react";
import "./detail-destination.css";
import Swiper from "swiper";
import { AiOutlineStar } from "react-icons/ai";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import destinationImg from "./../../assets/img/destination-detail-img.jpg";
import destinationGallery1 from "./../../assets/img/destination-gallery-1.jpeg";
import destinationGallery2 from "./../../assets/img/destination-gallery-2.jpg";
import destinationGallery3 from "./../../assets/img/destination-gallery-3.jpg";
import destinationGallery4 from "./../../assets/img/destination-gallery-4.jpg";

function DetailDestination() {
  useEffect(() => {
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
  }, []);

  const detailDestination = {
    name: "Pink Beach",
    geoLocation: {
      lat: -8.8554,
      long: 116.5622,
    },
    province: "East Nusa Tenggara",
    address: "Desa Labuan Bajo, Kecamatan Komodo, Kabupaten Manggarai Barat",
    category: "Beach",
    rating: 4.7,
    operationalTime: "08.00 - 17.00 WITA",
    description:
      "Pink Beach, or Red Beach, is one of the amazing tourist destinations on Komodo Island, East Nusa Tenggara. The pink sand is the main attraction, produced from a mixture of white sand and marine shale. This beach offers an extraordinary snorkeling experience with beautiful coral reefs and rich marine biodiversity. The stunning natural views and calm atmosphere make Pink Beach the perfect place to relax and enjoy the beauty of nature.",
    contactInformation:
      "Taman Nasional Komodo - Kantor Cabang Labuan Bajo, Telp: +62 385 41082",
    ticket: [300000, 1000000],
    activities: " Snorkeling, diving, sunbathing, swimming, hiking.",
    facilitiesAndServices:
      "Simple food and beverage stalls, snorkeling equipment rental.",
    weatherCharacteristics:
      "Summer (April - September) is the best time to visit. Clear skies with minimal rainfall.",
    transportation: [
      "Boat from Labuan Bajo: 3-4 hours by fast boat, or 8-10 hours by traditional boat.",
      "Plane from Denpasar to Labuan Bajo: 1-hour flight.",
    ],
    bestTimeToVisit: "Early morning or late afternoon to avoid the midday sun.",
    localTipsAndAdvice: [
      "Bring your own snorkeling gear if possible.",
      "Avoid touching or damaging the coral reefs.",
    ],
    gallery: [
      destinationGallery1,
      destinationGallery2,
      destinationGallery3,
      destinationGallery4,
      destinationGallery1,
      destinationGallery2,
    ],
  };
  return (
    <div className="detail_destination container">
      <h1>{detailDestination.name}</h1>
      <div className="detail_destination_main grid">
        <div className="detail_destination_content">
          <img src={destinationImg} alt="" />
          <div className="detail_destination_item">
            <h3>Description</h3>
            <p>{detailDestination.description}</p>
          </div>
          <div className="detail_destination_item">
            <h3>Activities</h3>
            <p>{detailDestination.activities}</p>
          </div>
          <div className="detail_destination_item">
            <h3>Facilities and Services</h3>
            <p>{detailDestination.facilitiesAndServices}</p>
          </div>
          <div className="detail_destination_item">
            <h3>Weather Characteristics</h3>
            <p>{detailDestination.weatherCharacteristics}</p>
          </div>
          <div className="detail_destination_item">
            <h3>Transportation</h3>
            <ul>
              {detailDestination.transportation.map((data, index) => (
                <li key={index}>
                  <p>{data}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="detail_destination_item">
            <h3>Best Time to Visit</h3>
            <p>{detailDestination.bestTimeToVisit}</p>
          </div>
          <div className="detail_destination_item">
            <h3>Local Tips and Advice</h3>
            <ul>
              {detailDestination.localTipsAndAdvice.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="detail_destination_info">
          <div className="info_main">
            <div className="info_top">
              <p className="info_category">{detailDestination.category}</p>
              <div className="rating">
                <AiOutlineStar />
                <span>4,7</span>
              </div>
            </div>
            <p>
              <span>Province</span> : {detailDestination.province}
            </p>
            <p>
              <span>Address</span> : {detailDestination.address}
            </p>
            <p>
              <span>Operational Time</span> :{" "}
              {detailDestination.operationalTime}
            </p>
            <p>
              <span>Ticket</span> : {detailDestination.ticket[0]} ~{" "}
              {detailDestination.ticket[1]}
            </p>
            <p>
              <span>Contact Information</span> :{" "}
              {detailDestination.contactInformation}
            </p>
          </div>
          <div className="info_maps">
            <MapContainer
              center={[
                detailDestination.geoLocation.lat,
                detailDestination.geoLocation.long,
              ]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker
                position={[
                  detailDestination.geoLocation.lat,
                  detailDestination.geoLocation.long,
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
            {detailDestination.gallery.map((image, index) => (
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
