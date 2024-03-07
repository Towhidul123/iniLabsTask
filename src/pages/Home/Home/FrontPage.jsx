

const FrontPage = () => {
    return (
        <div className="container mx-auto space-y-16">
            <div className="grid grid-cols-2 gap-4 mt-10">
                <div>
                    <h2 className="text-[#050038] font-extrabold text-4xl">Take ideas from <br /> better to best</h2>
                    <h2 className="mt-2 text-[#050038] text-sm ">Miro is your team's visual platform to connect, <br /> collaborate, and create - together</h2>

                    <div className="flex flex-col lg:w-96 mt-4">
                        <textarea className="rounded-full p-2 border-2" name="" id="" cols="20" rows="1" placeholder="Enter your Email"></textarea>
                        <button className="mt-2 p-2 rounded-full bg-[#4262FF]">Sign up free</button>
                    </div>

                    <h6 className="mt-1 opacity-60 text-xs">Collaborate with your team within minutes</h6>
                    <div className="mt-4">
                        <img src="/div (7).png" alt="" />
                    </div>

                </div>

                <div className="flex items-center">
                    <img src="/headimg.png" alt="" />
                </div>


            </div>




            <div>
                <img src="/trusted.png" alt="" />
            </div>
            <div className="flex  justify-around ">
                <img src="/feature.png" alt="" />
            </div>

            <div className="grid grid-cols-2 gap-4 items-center">

                <div className="space-y-10">
                    <h2 className="text-[#050038] font-extrabold text-4xl">Work together,<br /> wherever you work</h2>
                    <h6 className="text-[#050038] opacity-60 ">In the office, remote, or a mix of the two, with Miro, <br /> your team can connect, collaborate, and co-create in <br /> one space no matter where you are.</h6>
                    <a className="text-[#4262FF]" href="" >Learn more</a>
                </div>

                <div>
                    <img src="/hybridwork.png.png" alt="" />

                </div>

            </div>

            <div className="grid grid-cols-2 gap-4 items-center ">

                <div>
                    <img src="/M3.png.png" alt="" />

                </div>


                <div className="space-y-10">
                    <h2 className="text-[#050038] font-extrabold text-4xl">Connect <br /> your tools, <br /> close your tabs</h2>
                    <h6 className="text-[#050038] opacity-60 ">Whether you want to edit your Google Docs, resolve <br /> Jira issues, or collaborate over Zoom, Miro has 100+ <br /> integrations with tools you already use and love.</h6>
                    <a className="text-[#4262FF]" href="">Learn more </a>
                </div>



            </div>



            <div className="flex  justify-around ">
                <img src="/section (1).png" alt="" />

            </div>
            <div className="flex  justify-around ">
                <img src="/div.png" alt="" />

            </div>
            <div className="flex  justify-around ">
                <img src="/div1.png" alt="" />

            </div>
            <div className="flex  justify-around ">
                <img src="/div2.png" alt="" />

            </div>

        </div>
    );
};

export default FrontPage;