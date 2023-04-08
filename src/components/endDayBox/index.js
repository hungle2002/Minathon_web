import Lottie from 'react-lottie';

import animationData from '../../lotties/82762-lizard-running-lottie-animation.json';
/* eslint-disable max-len */
function EndDayBox () {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className="pt-2 pb-8 mx-auto mt-10 justify-center max-w-4xl border  border-black rounded-xl space-y-4">
            <div className="text-xl text-center">Congratulate for your effort today!</div>
            <div className="columns-2 px-6">
                <div className="text-center h-48 flex flex-row">
                    <div className="rounded-full bg-blue-500 h-40 w-40 mr-6"></div>
                    <div className="flex flex-col">
                        <div className="font-bold text-xl">Todolist</div>
                        <div>
                            <div className='text-left'>
                                <div>Practice Enlish listening V</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center">
                    <div className="text-center h-48 flex flex-row">
                        <Lottie options={defaultOptions}
                            height={200}
                            width={150}
                        />
                        <div className="basis-2/3 flex flex-col text-left">
                            <div className="font-bold text-xl text-center">Upcoming</div>
                            <div className='text-md'>
                                <div className='text-red-500'>- Complete brainstorm for UWC app</div>
                                <div className='text-yellow-500'>- Design UWC database</div>
                                <div className='text-slate-500'>- Complete figma for UWC app</div>
                                <div className='text-slate-500'>- Assignment 3 PPL</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-row gap-12 justify-center">
                <div className="basis-1/2  space-y-2 border border-black rounded-xl px-4 pt-2 pb-6 shadow-xl">
                    <div className="text-base font-medium text-center">Working statistic</div>
                    <div className="flex flex-row">
                        <div className="basis-1/2 flex flex-col">
                            <div>Short plan done: 20%</div>
                            <div>Long plan done: 5%</div>
                            <div>Work time: 10 hours</div>
                        </div>
                        <div className="basis-1/2 flex flex-col">
                            <div>Click: 1000</div>
                            <div>Key board: 1000</div>
                            <div>Distract time: 1.5 hours</div>
                        </div>
                    </div>
                </div>
                <div className="basis-1/3 space-y-4">
                    <div className="space-y-2">
                        <div className="text-base font-medium">Evaluate yourself</div>
                        <input type="text" className="border rounded-2xl w-16 text-center" placeholder="On 100" />
                    </div>
                    <div className="space-y-2">
                        <div className="text-base font-medium">Diary</div>
                        <button className="border bg-blue-500 text-white font-medium px-2 py-2 text-sm rounded-xl">Write now!</button>
                    </div>
                </div>

            </div>
        </div>
    );
}
export default EndDayBox;
