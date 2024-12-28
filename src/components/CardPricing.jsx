'use client'
import ScrollAnimation from 'react-animate-on-scroll';


export default function CardPricing({ img }) {



    return (
        < div className="" >

            <ScrollAnimation
                animateIn='bounceInRight'
                animateOut='bounceOutRight'
                initiallyVisible={false} offset={0}
            >
                <div className="w-full grid grid-cols-3 gap-4 bg-white rounded-[50px] shadow-lg">

                    <div className="text-black col-span-2 bg-white p-10  rounded-r-[50px] ">
                        ✔️ Проходят в Skype или Google Meet <br />
                        ✔️ На интерактивной доске Miro + платформе Progressme, отдельно высылается список слов с пройденными словами по теме урока в Quizlet <br />
                        ✔️ Используются аутентичные материалы (учебники, статьи, видео, аудио, песни) <br />
                        ✔️ Развиваются все аспекты языка. Особое внимание уделяется говорению и аудированию <br />
                        ✔️ Программа составляется под цели и запросы каждого ученика <br />
                        ✔️ Количество занятий выбирает ученик, однако для достижения большего результата рекомендуем заниматься минимум 2 раза в неделю
                    </div>
                </div></ScrollAnimation></div>
    );
}