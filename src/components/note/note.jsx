import { MdOutlineDeleteOutline } from "react-icons/md";
import "./note.css";
const Note = () => {
  return (
    <div className="note-container">
      <div className="note-color-div"></div>
      <a className="note-title">عنوان یادداشت</a>
      <a className="note-decription">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
        از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
        سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
        متنوع با هدف بهبود ابزارهای کاربردی می باشد
      </a>
      <a className="note-date">1402/03/30</a>
      <div className="note-btns-div">
        <fiv className="note-delete">
          <MdOutlineDeleteOutline />
        </fiv>
      </div>
    </div>
  );
};

export default Note;
