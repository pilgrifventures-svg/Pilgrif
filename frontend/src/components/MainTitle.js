import React from "react";
import "./MainTitle.css";

const MainTitle = () => {
  return (
    <div className="main-title-section">
      {/* Main Title - only Pilgrif Ventures in yellow circle */}
      <div className="title-container">
        <div className="background-shape"></div>
        <div className="main-title">
          <div className="fit-text-container">
            <span
              className="title-text fit-text"
              data-min-font="24"
              data-max-font="220"
              data-multiline="false"
              data-padding="0"
            >
              PILGRIF VENTURES
            </span>
          </div>
        </div>
      </div>

      {/* Infinity Scroller - with social media and marketing icons */}
      <div className="infinite-scroller-container">
        <div className="infinite-scroller" aria-hidden="true">
          <div className="scroller-track">
            {[...Array(5)].map((_, i) => (
              <React.Fragment key={`set-a-${i}`}>
                <div className="scroller-avatar">
                  <img src="https://static.prod-images.emergentagent.com/jobs/11adb678-f32d-457d-9662-a7feb0b96738/images/bd33e15000f974db63b4fac1d9bbf14ceca7d776e4aef3376aab94ab0fdcdc11.png" alt="Instagram" />
                </div>
                <div className="scroller-avatar">
                  <img src="https://static.prod-images.emergentagent.com/jobs/11adb678-f32d-457d-9662-a7feb0b96738/images/3668f274109dde224a9c8ad52aea6c987d4561e3203f7419b829cedcb3971b90.png" alt="Meta" />
                </div>
                <div className="scroller-avatar">
                  <img src="https://static.prod-images.emergentagent.com/jobs/11adb678-f32d-457d-9662-a7feb0b96738/images/9bbff8ca47d5ea1398b0763423e657c39e7b3073237e56d4355566d78717703b.png" alt="YouTube" />
                </div>
                <div className="scroller-avatar">
                  <img src="https://static.prod-images.emergentagent.com/jobs/11adb678-f32d-457d-9662-a7feb0b96738/images/c6531d4ec13218d99bd307ccc198e66cf38db33160372cf8eca543e0ecd9ed9b.png" alt="Brand Strategy" />
                </div>
                <div className="scroller-avatar">
                  <img src="https://static.prod-images.emergentagent.com/jobs/11adb678-f32d-457d-9662-a7feb0b96738/images/f63c73526f1dded1d1239aeba6860210f1ea26fafcb518fedb55c06bb4dddf78.png" alt="Marketing Analytics" />
                </div>
              </React.Fragment>
            ))}
            {[...Array(5)].map((_, i) => (
              <React.Fragment key={`set-b-${i}`}>
                <div className="scroller-avatar">
                  <img src="https://static.prod-images.emergentagent.com/jobs/11adb678-f32d-457d-9662-a7feb0b96738/images/bd33e15000f974db63b4fac1d9bbf14ceca7d776e4aef3376aab94ab0fdcdc11.png" alt="Instagram" />
                </div>
                <div className="scroller-avatar">
                  <img src="https://static.prod-images.emergentagent.com/jobs/11adb678-f32d-457d-9662-a7feb0b96738/images/3668f274109dde224a9c8ad52aea6c987d4561e3203f7419b829cedcb3971b90.png" alt="Meta" />
                </div>
                <div className="scroller-avatar">
                  <img src="https://static.prod-images.emergentagent.com/jobs/11adb678-f32d-457d-9662-a7feb0b96738/images/9bbff8ca47d5ea1398b0763423e657c39e7b3073237e56d4355566d78717703b.png" alt="YouTube" />
                </div>
                <div className="scroller-avatar">
                  <img src="https://static.prod-images.emergentagent.com/jobs/11adb678-f32d-457d-9662-a7feb0b96738/images/c6531d4ec13218d99bd307ccc198e66cf38db33160372cf8eca543e0ecd9ed9b.png" alt="Brand Strategy" />
                </div>
                <div className="scroller-avatar">
                  <img src="https://static.prod-images.emergentagent.com/jobs/11adb678-f32d-457d-9662-a7feb0b96738/images/f63c73526f1dded1d1239aeba6860210f1ea26fafcb518fedb55c06bb4dddf78.png" alt="Marketing Analytics" />
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainTitle;