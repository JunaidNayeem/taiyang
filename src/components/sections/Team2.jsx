import Data from "@data/sections/team2.json";
import Link from "next/link";

const Team2Section = ( { team } ) => {
    return (
        <>
            {/* Onovo Team */}
			<section className="onovo-section gap-top-140 gap-bottom-140">
				<div className="container">

					{/* Team items */}
					<div className="row gap-row align-center">

						{/* Heading */}
						<div className="col-xs-12 col-sm-12 col-md-11 col-lg-5">
							<div className="onovo-heading align-left">
								<div className="onovo-subtitle-1">
									<span>{Data.subtitle}</span>
								</div>
								<h2 className="onovo-title-2">
                                    <span dangerouslySetInnerHTML={{__html: Data.title}} />
								</h2>
							</div>
						</div>

						{/* team items */}
						<div className="col-xs-12 col-sm-12 col-md-1 col-lg-1"></div>

						{team.slice(0, Data.numOfItems).map((item, key) => (

						<div key={`team2-item-${key}`} className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
							<div className="onovo-team-two">
								<div className="onovo-team-two-item">
									<div className="image onovo-hover-3 onovo-hover-black-30" data-onovo-overlay data-onovo-scroll>
										<a href={`/team/${item.id}`}>
											<img src={item.image} alt={item.name} />
										</a>
									</div>
									<div className="desc">
										<h5 className="title">
											<a href={`/team/${item.id}`} className="onovo-lnk">
												<span data-splitting data-onovo-scroll>{item.name}</span>
											</a>
										</h5>
										<div className="onovo-subtitle-1">
											<span data-splitting data-onovo-scroll>{item.role}</span>
										</div>
									</div>
								</div>
							</div>
						</div>

						))}
					</div>
					
				</div>
			</section>
        </>
    );
};

export default Team2Section;