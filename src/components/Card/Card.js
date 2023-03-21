import styles from "./Card.module.scss";

const Card = ({ results }) => {

    let display;

    if (results) {
        display = results.map((x) => {
            let { id, image, name, status, location } = x;

            return (
                <div
                    className={`${styles.card} col-4 d-flex flex-column justify-content-center`}
                >
                    <img className={`${styles.img} img-fluid`} src={image} alt="" />
                    <div className={`${styles.content}`}>
                        <div className="fs-5 fw-bold mb-4">{name}</div>
                        <div className="">
                            <div className="fs-6 fw-normal">Last Location</div>
                            <div className="fs-5">{location.name}</div>
                            {status}
                        </div>
                    </div>
                </div>
            );
    });
}
    else {
    display = "No Characters Found :/";
}
return <>{display}</>;
};

export default Card;
