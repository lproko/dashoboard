import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Text } from "@chakra-ui/react";
import "leaflet/dist/leaflet.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchShipmentsbyId } from "@/api";
interface MapProps {
  long: number;
  lat: number;
}

export const Map = ({ long, lat }: MapProps) => {
  const { id } = useParams();
  const [shipment, setShipment] = useState<any>({});
  useEffect(() => {
    fetchShipmentsbyId(id as string).then((res) => setShipment(res[0]));
  }, []);
  console.log(shipment);
  return (
    long &&
    lat && (
      <MapContainer center={[long, lat]} zoom={2}>
        <TileLayer
          // attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
        />
        <Marker position={[long, lat]}>
          <Popup>
            <Text fontSize="lg" fontWeight="bold" mb={2}>
              Shipment Details
            </Text>
            {/* <Divider mb={3} /> */}
            <Text>
              <strong>ID:</strong> {shipment.shipmentId}
            </Text>
            <Text>
              <strong>Destination:</strong> {shipment.destinationName}
            </Text>
            <Text mt={2}>
              <strong>Location:</strong> {lat.toFixed(4)}, {long.toFixed(4)}
            </Text>
          </Popup>
        </Marker>
      </MapContainer>
    )
  );
};
