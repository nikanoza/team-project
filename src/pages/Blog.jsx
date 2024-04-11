import Header from "../components/Header";
const Blog = () => {
  return (
    <>
      <Header />
      <div className=" bg-light-gray flex flex-col items-center ">
        <div className=" w-[720px]">
          <img
            src="public/unsplash_L0nipfx-Ry4(2).png"
            className=" w-[720px] h-[328px] mt-10 mb-10 "
          />
          <p className=" text-dark font-medium text-base leading-5">
            ლილე კვარაცხელია
          </p>
          <p className=" text-gray font-normal text-xs leading-4">
            02.11.2023 • lile.kvaratskhelia@redberry.ge
          </p>
          <h2 className=" w-[720px] text-[32px] text-dark font-bold leading-10 mt-6 mb-6">
            მობილური ფოტოგრაფიის კონკურსის გამარჯვებულთა ვინაობა ცნობილია
          </h2>
          <div className=" flex flex-row justify-start gap-4 mb-10">
            <button className=" flex justify-center align-middle p-x-[6px] py-[10px] rounded-[30px] gap-[10px] bg-yellow bg-opacity-30">
              <p className=" mx-[10px] my-[6px] text-xs font-medium leading-4 text-yellow ">
                მარკეტი
              </p>
            </button>
            <button className=" flex justify-center align-middle p-x-[6px] py-[10px] rounded-[30px] gap-[10px] bg-opacity-30 bg-green">
              <p className=" mx-[10px] my-[6px] text-xs font-medium leading-4 text-green">
                მარკეტი
              </p>
            </button>
            <button className=" flex justify-center align-middle p-x-[6px] py-[10px] rounded-[30px] gap-[10px] bg-opacity-30 bg-purple">
              <p className=" mx-[10px] my-[6px] text-xs font-medium leading-4 text-purple">
                ხელოვნური ინტელექტი
              </p>
            </button>
          </div>
          <p className=" w-[720] text-dark text-[16px] text-left leading-[28px] mb-10">
            6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
            სიზუსტისთვის, ეს პროცესი ორჯერ გაიმეორეს და ორივეჯერ იმ ყველს
            მიენიჭა უპირატესობა, რომელსაც ჰიპ-ჰოპს ასმენინებდნენ. „მუსიკალური
            ენერგია პირდაპირ ყველის შუაგულში რეზონირებდა“, — აღნიშნა ბერნის
            ხელოვნების უნივერსიტეტის წარმომადგენელმა, მაიკლ ჰერენბერგმა. რა თქმა
            უნდა, ეს ერთი კვლევა საკმარისი არ არის საბოლოო დასკვნების
            გამოსატანად. სანაცვლოდ, მეცნიერებს სურთ, უშუალოდ ჰიპ-ჰოპის ჟანრის
            სხვადასხვა მუსიკა მოასმენინონ რამდენიმე ყველს და უკვე ისინი
            შეაჯიბრონ ერთმანეთს. აქვე საგულისხმოა, რომ როგორც ბერნის მეცნიერები
            განმარტავენ, ექსპერიმენტს საფუძვლად არა ყველის გაუმჯობესებული
            წარმოება, არამედ კულტურული საკითხები დაედო. მათი თქმით, ადამიანებს
            უყვართ ყველი და მუსიკა, ამიტომაც საინტერესოა ამ ორის კავშირის
            დანახვა.
          </p>

          <p className=" w-[720] text-dark text-[16px] text-left leading-[28px] mb-[98px]">
            6 თვის შემდეგ ყველის ბრმა დეგუსტაციის დროც დადგა. მაქსიმალური
            სიზუსტისთვის, ეს პროცესი ორჯერ გაიმეორეს და ორივეჯერ იმ ყველს
            მიენიჭა უპირატესობა, რომელსაც ჰიპ-ჰოპს ასმენინებდნენ. „მუსიკალური
            ენერგია პირდაპირ ყველის შუაგულში რეზონირებდა“, — აღნიშნა ბერნის
            ხელოვნების უნივერსიტეტის წარმომადგენელმა, მაიკლ ჰერენბერგმა. რა თქმა
            უნდა, ეს ერთი კვლევა საკმარისი არ არის საბოლოო დასკვნების
            გამოსატანად. სანაცვლოდ, მეცნიერებს სურთ, უშუალოდ ჰიპ-ჰოპის ჟანრის
            სხვადასხვა მუსიკა მოასმენინონ რამდენიმე ყველს და უკვე ისინი
            შეაჯიბრონ ერთმანეთს.
          </p>
        </div>
      </div>

      <div className=" bg-light-gray flex flex-col px-[75px]">
        <div className="flex flex-row justify-between">
          <h3 className=" w-[720px] text-dark font-bold text-[32px] leading-[40px]">
            მსგავსი სტატიები
          </h3>
          <div>
            <button>
              <img src="public/Arrow (1).svg" />
            </button>
            <button className=" ml-4">
              <img src="public/Arrow (3).svg" />
            </button>
          </div>
        </div>

        <div className=" flex flex-row gap-8 mb-[475px] mt-10">
          <div>
            <img src="public/unsplash_v9FQR4tbIq8.png" />
            <p className=" text-dark text-base font-medium leading-5 mt-6 ">
              ტატო სამხარაძე
            </p>
            <p className=" mb-4 text-gray font-normal text-xs leading-4">
              02.11.2023
            </p>
            <h4 className=" text-dark text-xl font-medium leading-7 mb-4">
              EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა
            </h4>
            <div className=" flex flex-row justify-start gap-4 mb-4">
              <button className=" flex justify-center align-middle p-x-[6px] py-[10px] rounded-[30px] gap-[10px] items-center bg-yellow bg-opacity-30 h-[30px]">
                <p className=" mx-[10px] my-[6px] text-xs font-medium leading-4 text-yellow ">
                  მარკეტი
                </p>
              </button>
              <button className=" flex justify-center align-middle p-x-[6px] py-[10px] rounded-[30px] gap-[10px] bg-opacity-30 items-center bg-green h-[30px]">
                <p className=" mx-[10px] my-[6px] text-xs font-medium leading-4 text-green">
                  მარკეტი
                </p>
              </button>
              <button className=" flex justify-center align-middle p-x-[6px] py-[10px] rounded-[30px] gap-[10px] bg-opacity-30 items-center bg-purple h-[30px] w-[166px]">
                <p className=" mx-[10px] my-[6px] text-xs font-medium leading-4 text-purple">
                  ხელოვნური ინტელექტი
                </p>
              </button>
            </div>
            <div>
              <p className=" text-left text-base font-normal leading-7 mb-4">
                In an era dominated by technological advancements, it's no
                surprise that our traditional notions of curren...
              </p>
              <div className=" flex flex-row">
                <button className=" text-indigo font-normal leading-7 text-xs">
                  სრულად ნახვა
                </button>
                <img src="public/up.svg" />{" "}
              </div>
            </div>
          </div>

          <div>
            {" "}
            <img src="public/unsplash_01_igFr7hd4.png" />
            <p className=" text-dark text-base font-medium leading-5 mt-6 ">
              ტატო სამხარაძე
            </p>
            <p className=" mb-4 text-gray font-normal text-xs leading-4">
              02.11.2023
            </p>
            <h4 className=" text-dark text-xl font-medium leading-7 mb-4">
              მოსმენა ყველს უფრო გემრიელს ხდის?
            </h4>
            <div className=" flex flex-row justify-start items-center gap-4 mb-10">
              <button className=" flex justify-center align-middle p-x-[6px] py-[10px] rounded-[30px] gap-[10px] bg-yellow items-center bg-opacity-30 h-[30px]">
                <p className=" mx-[10px] my-[6px] text-xs font-medium leading-4 text-yellow ">
                  მარკეტი
                </p>
              </button>
              <button className=" flex justify-center align-middle p-x-[6px] py-[10px] rounded-[30px] gap-[10px] bg-opacity-30 items-center bg-green h-[30px]">
                <p className=" mx-[10px] my-[6px] text-xs font-medium leading-4 text-green">
                  მარკეტი
                </p>
              </button>
              <button className=" flex justify-center align-middle p-x-[6px] py-[10px] rounded-[30px] gap-[10px] bg-opacity-30 items-center bg-purple h-[30px] w-[166px]">
                <p className=" mx-[10px] my-[6px] text-xs font-medium leading-4 text-purple">
                  ხელოვნური ინტელექტი
                </p>
              </button>
            </div>
            <div>
              <p className=" text-left text-base font-normal leading-7 mb-4">
                In an era dominated by technological advancements, it's no
                surprise that our traditional notions of curren...
              </p>
              <div className=" flex flex-row">
                <button className=" text-indigo font-normal leading-7 text-xs">
                  სრულად ნახვა
                </button>
                <img src="public/up.svg" />{" "}
              </div>
            </div>
          </div>

          <div>
            {" "}
            <img src="public/unsplash_lmCajireIn8.png" />
            <p className=" text-dark text-base font-medium leading-5 mt-6 ">
              ტატო სამხარაძე
            </p>
            <p className=" mb-4 text-gray font-normal text-xs leading-4">
              02.11.2023
            </p>
            <h4 className=" text-dark text-xl font-medium leading-7 mb-4">
              EOMM-ის მრჩეველთა საბჭოს ნინო ეგაძე შეუერთდა
            </h4>
            <div className=" flex flex-row items-center justify-start gap-4 mb-10">
              <button className=" flex justify-center align-middle p-x-[6px] py-[10px] rounded-[30px] gap-[10px] bg-yellow items-center bg-opacity-30 h-[30px]">
                <p className=" mx-[10px] my-[6px] text-xs font-medium leading-4 text-yellow ">
                  მარკეტი
                </p>
              </button>
              <button className=" flex justify-center align-middle p-x-[6px] py-[10px] rounded-[30px] gap-[10px] bg-opacity-30 items-center bg-green h-[30px]">
                <p className=" mx-[10px] my-[6px] text-xs font-medium leading-4 text-green">
                  მარკეტი
                </p>
              </button>
              <button className=" flex justify-center align-middle p-x-[6px] py-[10px] rounded-[30px] gap-[10px] bg-opacity-30 items-center bg-purple h-[30px] w-[166px]">
                <p className=" mx-[10px] my-[6px] text-xs font-medium leading-4 text-purple">
                  ხელოვნური ინტელექტი
                </p>
              </button>
            </div>
            <div>
              <p className=" text-left text-base font-normal leading-7 mb-4">
                In an era dominated by technological advancements, it's no
                surprise that our traditional notions of curren...
              </p>
              <div className=" flex flex-row">
                <button className=" text-indigo font-normal leading-7 text-xs">
                  სრულად ნახვა
                </button>
                <img src="public/up.svg" />{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
