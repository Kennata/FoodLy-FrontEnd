import NasiGoreng from "../assets/NasiGoreng.png"
import LikeIcon from "../assets/LikeIcon.svg"
import CalorIcon from "../assets/CalorIcon.svg"
import DateIcon from "../assets/DateIcon.svg"


export default function FoodCard(){
  return(
    <>
      <div className="card" style={{ width: "28rem" }}>
        <img src={NasiGoreng} alt="Nasigoreng" className="card-img-top" />
        <div className="card-body mt-3">
          <h6 className="card-title mb-2">Nasi Goreng Spesial</h6>
          <p className="card-text font-custom-color">oleh Chef_Juna</p>

          <div className="d-flex justify-content-between">
  
            <div className="d-flex align-items-center gap-1">
              <img src={LikeIcon} style={{ height: "16px" }} />
              <p className="font-custom-color m-0">203</p>
            </div>

            <div className="d-flex align-items-center gap-1">
              <img src={CalorIcon} style={{ height: "16px" }} />
              <p className="font-custom-color m-0">1000 kal</p>
            </div>

            <div className="d-flex align-items-center gap-1">
              <img src={DateIcon} style={{ height: "16px" }} />
              <p className="font-custom-color m-0">2/4/2026</p>
            </div>

          </div>

        </div>
      </div>
    </>
  )
}