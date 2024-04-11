import Header from "../components/Header";
import FolderAdd from "../svg/FolderAdd";
const AddBlog = () => {
  return (
    <div>
      <Header />
      <div className=" flex flex-col items-center bg-lily ">
        <h1 className=" text-dark text-[32px] font-bold leading-10 mt-10 mb-10">
          ბლოგის დამატება
        </h1>
        <form>
          <div
            className=" w-[600px] h-[180px] rounded-xl flex flex-col gap-7
           justify-center items-center border-[1px] rounded-xl border-gray  "
          >
            <FolderAdd />
            <p>
              ჩააგდეთ ფაილი აქ ან{" "}
              <span className=" underline">აირჩიეთ ფაილი</span>
            </p>
          </div>
          <div className=" flex flex-row gap-6 mt-6">
            <div className=" flex flex-col gap-2">
              <h3 className=" text-dark text-sm font-medium leading-5">
                ავტორი *
              </h3>
              <input
                type="text"
                placeholder="შეიყვნეთ ავტორი"
                className=" w-[228px] h-[44px]  bg-motetro border-[1px] rounded-xl"
              />
              <p className=" text-gray text-xs font-normal leading-5">
                მინიმუმ 4 სიმბოლო
              </p>
              <p className=" text-gray text-xs font-normal leading-5">
                მინიმუმ ორი სიტყვა
              </p>
              <p className=" text-gray text-xs font-normal leading-5">
                მხოლოდ ქართული სიმბოლოები
              </p>
            </div>
            <div className=" flex flex-col gap-2">
              <h3 className=" text-dark text-sm font-medium leading-5">
                სათური *
              </h3>
              <input
                type="text"
                placeholder="შეიყვნეთ სათაური"
                className=" w-[228px] h-[44px]  bg-motetro border-[1px] rounded-xl"
              />
              <p className=" text-gray text-xs font-normal leading-5">
                მინიმუმ 2 სიმბოლო
              </p>
            </div>
          </div>
          <div className=" flex flex-col gap-2 mt-6">
            <p className=" text-dark text-sm font-medium leading-5">აღწერა *</p>
            <input
              type="text"
              placeholder="შეიყვნეთ აღწერა"
              className=" w-[600px] h-[124px]  bg-motetro border-[1px] rounded-xl "
            />
            <p className=" text-gray text-xs font-normal leading-5">
              მინიმუმ 2 სიმბოლო
            </p>
          </div>

          <div className=" flex flex-row gap-6 mt-6">
            <div>
              <p className=" text-dark text-sm font-medium leading-5">
                გამოქვეყნების თარიღი *
              </p>
              <input
                type="date"
                className=" w-[228px] h-[44px]  bg-motetro border-[1px] rounded-xl"
              />
            </div>
            <div>
              <p className=" text-dark text-sm font-medium leading-5">
                კატეგორია *
              </p>

              <select
                name="category"
                id="category-select"
                className=" w-[228px] h-[44px]  bg-motetro border-[1px] rounded-xl"
              >
                <option value="">აირჩიეთ კატეგორია</option>
                <option value="category1">Category 1</option>
                <option value="category2">Category 2</option>
                <option value="category3">Category 3</option>
              </select>
            </div>
          </div>
          <div className=" mt-6    ">
            <p className=" text-dark text-sm font-medium leading-5 mb-2">
              ელ-ფოსტა
            </p>
            <input
              type="mail"
              placeholder="Example@redberry.ge"
              className=" w-[288px] h-[44px]  bg-motetro border-[1px] rounded-xl "
            />
          </div>
        </form>
        <button className=" mb-[110px] mt-10 bg-motetro w-[288px] h-[40px] ml-[312px] flex items-center rounded-[8px] text-white justify-center">
          გამოქვეყნება
        </button>
      </div>
    </div>
  );
};

export default AddBlog;
