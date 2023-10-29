import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./detail-destination.css";
import { AiOutlineStar } from "react-icons/ai";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Icon } from "leaflet";
import mapIcon from "./../../assets/img/map-icon.png";

function DetailDestination() {
  const [destination, setDestination] = useState(null);
  const { id } = useParams();

  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "60px",
        },
      },
    ],
  };

  const customIcon = new Icon({
    iconUrl: mapIcon,
    iconSize: [38, 38],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://indoxplore-project.cyclic.app/api/destinations/${id}`
        );
        const json = await result.json();

        if (json.data) {
          setDestination(json.data);
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
    return <div></div>;
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
                icon={customIcon}
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
        <Slider {...settings}>
          {destination.gallery.map((image, index) => (
            <div className="swiper-slide" key={index}>
              <img src={image} alt={`Image ${index}`} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default DetailDestination;
