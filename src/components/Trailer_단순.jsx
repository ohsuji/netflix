//react-bootstrap modal을 이용한 유튜브 팝업
//https://www.npmjs.com/package/react-youtube -react-youtube라이브러리 설치
//https://github.com/u-wave/react-youtube  -react-youtube라이브러리

import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import YouTube from "@u-wave/react-youtube";

const Trailer = ({ item }) => {
	const [show, setShow] = useState(false);

	//"Official Trailer"가 있을때
	//const trailer = item.results?.find((item) => {
	//return item.name === "Official Trailer";
	//});
	const trailer = item.results[0];

	return (
		<div>
			{console.log("받아온 item이 모야?? ", item)}
			{console.log("trailer??? ", trailer)}
			{console.log("trailer.key??? ", trailer.key)}

			<p className="trailer-btn" onClick={() => setShow(true)}>
				🎬 Watch Trailer
			</p>

			<Modal
				show={show}
				onHide={() => setShow(false)}
				fullscreen={true}
				dialogClassName="modal-90w"
				aria-labelledby="example-custom-modal-styling-title"
			>
				<Modal.Header closeButton></Modal.Header>
				<Modal.Body>
					<YouTube video={trailer.key} autoplay width="100%" height="100%" />
				</Modal.Body>
			</Modal>
		</div>
	);
};

export default Trailer;
