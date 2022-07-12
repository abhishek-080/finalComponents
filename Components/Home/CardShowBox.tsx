
const CardShowBox = () => {
  return (
    <div>

      <div className="card-body pb-0 p-5 shadow  mt-4 rounded" >
        {/* <!--begin::Header--> */}
        <div className="d-flex align-items-center mb-5">
          {/* <!--begin::User--> */}
          <div className="d-flex align-items-center flex-wrap flex-grow-1">
            {/* <!--begin::Avatar--> */}
            <div className="symbol w-100 ">
              <img src="./cardGG.png" alt="" style={{ height: "auto", width: "100%" }} />
            </div>
            <div className="d-flex flex-row mt-5 ms-2">
              <div className="gtitle">
                <p className="fs-2 fst-italic"> Get Your genius card now</p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default CardShowBox