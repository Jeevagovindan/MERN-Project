import "bootstrap/dist/css/bootstrap.min.css";
import "../style.css";

const BlogImage = [
  {
    img: "https://cdn.no-toxic.com/image/fetch/q_auto:good,f_auto,fl_lossy,w_392,c_limit/https://cdn.shopify.com/s/files/1/0648/1955/articles/Thumbnail_100__PURE_The_pH_Factor__Unlocking_the_Secret_to_Healthy_Glowing_Skin_with_pH-Balanced_Skincare.jpg?v=1679315402",
    date: "March 21,2023",
    p: "The pH Factor Unlocking the Secret to Healthy, Glowing Skin with pH-Balanced Skincare",
  },
  {
    img: "https://cdn.no-toxic.com/image/fetch/q_auto:good,f_auto,fl_lossy,w_392,c_limit/https://cdn.shopify.com/s/files/1/0648/1955/articles/Thumbnail_100_PURE_Wake_Up_to_Beautiful_Skin__The_Ultimate_Step-by-Step_Guide_to_Your_Perfect_Nighttime_Skincare_Routine.jpg?v=1679313671",
    date: "March 20,2023",
    p: "Wake Up to Beautiful Skin The Ultimate Step-by-Step Guide to Your Perfect Nighttime Skincare Routine",
  },
  {
    img: "https://cdn.no-toxic.com/image/fetch/q_auto:good,f_auto,fl_lossy,w_392,c_limit/https://cdn.shopify.com/s/files/1/0648/1955/articles/Thumbnail_100__PURE_Nature_s_Cure_for_Flawless_Skin__Say_Goodbye_to_Acne_Aging_and_Hyperpigmentation.jpg?v=1679311283",
    date: "March 20,2023",
    p: "Nature's Cure for Flawless Skin Say Goodbye to Acne, Aging, and Hyperpigmentation",
  },
  {
    img: "https://cdn.no-toxic.com/image/fetch/q_auto:good,f_auto,fl_lossy,w_392,c_limit/https://cdn.shopify.com/s/files/1/0648/1955/articles/Thumbnail_100__PURE_The_Clean_Mascara_Handbook__Your_Essential_Guide_to_Healthy_and_Gorgeous_Lashes.jpg?v=1678982152",
    date: "March 16,2023",
    p: "The Clean Mascara Handbook: Your Essential Guide to Healthy and Gorgeous Lashes",
  },
  {
    img: "https://cdn.no-toxic.com/image/fetch/q_auto:good,f_auto,fl_lossy,w_392,c_limit/https://cdn.shopify.com/s/files/1/0648/1955/articles/Thumbnail_100__pURE_Beauty_Without_Compromise__The_Nontoxic_Skincare_Guide_to_Healthy_Glowing_Skin.jpg?v=1679042458",
    date: "March 11,2023",
    p: "Beauty without Compromise The Nontoxic Skincare Guide to Healthy, Glowing Skin",
  },
  {
    img: "https://cdn.no-toxic.com/image/fetch/q_auto:good,f_auto,fl_lossy,w_392,c_limit/https://cdn.shopify.com/s/files/1/0648/1955/articles/Thumbnail_100__PURE_Reveal_Those_Youthful_Eyes__The_Anti-Aging_Benefits_of_Eye_Creams_and_Masks.jpg?v=1679304240",
    date: "March 20,2023",
    p: "Reveal Those Youthful Eyes The Anti-Aging Benefits of Eye Creams and Masks",
  },
];

export default function Blog() {
  return (
    <div>
      <div class="text-center blog">From Our Blog</div>

      <div className="row gx-0 overflow-scroll flex-nowrap  row-margin scroll position-relative px-2">
        {BlogImage.map((e) => {
          return (
            <div className="col-12 col-sm-6 col-md-4 p-3">
              <div className="position-relative">
                <img
                  className="blogimage w-100 h-100"
                  src={e.img}
                  alt="blog1"
                />
              </div>
              <div className="text-center">
                <div style={{ fontsize: "10px" }} className="pt-1">
                  {e.date}
                </div>
                <div className="py-3 fs-3"> {e.p}</div>
                <button
                  className="butn"
                  style={{ width: "150px", height: "50px" }}
                >
                  READ MORE
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
