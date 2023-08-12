import Link from "next/link";
import appData from "@data/app.json";
import { useEffect } from "react";
import ImageView from "@components/ImageView";
import { footerSticky } from "@common/utilits";

const DefaultFooter = () => {
  useEffect(() => {
    footerSticky();
  }, []);

  return (
    <>
      {/* Footer */}
      <footer className="onovo-footer footer--dark">
        <div className="footer--default">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-3">
                {/* Description */}
                <div className="onovo-text onovo-text-white">
                  <h5>Information</h5>
                  <p style={{ opacity: "0.6" }}>
                    Contact Taiyang for seamless product sourcing and expert
                    consulting services to fuel your business{" "}
                    growth and digital success.{" "}
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 offset-lg-1">
                {/* Description */}
                <div className="onovo-text onovo-text-white">
                  <h5>Get in Touch</h5>
                  <p style={{ opacity: "0.6" }}>
                    160 Robinson Road, #14-04 Singapore Business Federation
                    Center,
                    <br />
                    Singapore (068914)
                  </p>
                  <p style={{ opacity: "0.6" }}>
                    <a
                      href="tel:+10204302973"
                      className="onovo-lnk lnk--white"
                      target="_blank"
                    >
                      +65 6929 8272
                    </a>
                    <br />
                    <a
                      href="mailto:username@domain.com"
                      className="onovo-lnk lnk--white"
                      target="_blank"
                    >
                      info@taiyangsg.com
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4">
                <div
                  className="col-xs-12 col-sm-12 col-md-12 col-lg-3 offset-lg-1 hide-on-mobile"
                  style={{ margin: "0", width: "100%", height: "100%" }}
                >
                  {/* Image */}
                  <img src="/images/logo-main.png" alt="" />
                </div>
              </div>
            </div>

            <div className="separator"></div>

            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-self-center">
                {/* Copyright */}
                <div className="copyright onovo-text-white">
                  <div
                    dangerouslySetInnerHTML={{ __html: appData.footer.copy }}
                  />
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 align-right">
                {/* Social */}
                <div className="onovo-social-1 onovo-social-active">
                  <ul>
                    {appData.social.map((item, key) => (
                      <li key={`fsocial-item-${key}`}>
                        <a
                          className="onovo-social-link onovo-hover-2"
                          href={item.link}
                          title={item.title}
                          target="_blank"
                        >
                          <i className={item.icon}></i>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <ImageView />
    </>
  );
};
export default DefaultFooter;
