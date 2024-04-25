const MentorProfileCard = () => {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
                <div className="flex flex-col items-center">
                    <img className="w-32 h-32 rounded-full" src="/images/mentor-img.png" alt="Winnie Johnson" />
                    <div className="font-bold text-xl my-2">Winnie Johnson</div>
                    <div className="mt-4 bg-purple-100 text-purple-700 text-xs uppercase font-semibold px-2 mx-8 py-1 inline-block rounded-full">
                        Mastercard Scholarship
                    </div>
                    <div className="text-primary text-sm mb-2">Google Scholarship</div>
                    <button className="bg-secondary hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded-full">
                        View Winnie Johnson's Profile
                    </button>
                    <div className="text-gray-700 text-base mt-3">
                        Current Mentees: 104
                    </div>
                </div>
            </div>
        </div>
    );
};


export default MentorProfileCard;