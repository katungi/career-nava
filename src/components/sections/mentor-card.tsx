import { toast } from "sonner";
import { Button } from "../ui/button";
import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode, Key } from "react";
import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export const MentorProfileCard = ({ mentor, selectMentor, setStep }: any) => {
    const router = useRouter();
    function selectMentorHandler() {
        console.log("Selected Mentor::::", mentor)
        toast.success(`You have selected ${mentor.name} as your mentor`);
        selectMentor(mentor);
        setStep('view-profile');
        router.push(`/app/dashboard/sessions/view/${mentor.id}`);
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <div className="px-6 py-4">
                <div className="flex flex-col items-center">
                    <Avatar className="w-20 h-20">
                        <AvatarImage alt="Mentee" src={mentor.image} />
                        <AvatarFallback>{mentor.name.split(' ').map((n: any) => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    {/* {
                        mentor.image ? (
                            <img className="w-32 h-32 rounded-full" src={mentor.image} alt={mentor.name} />
                        ) : (
                            <Avatar className="w-32 h-32 bg-secondary" >
                               <p className="text-gray-800">{mentor.name.split(' ').map((n: any) => n[0]).join('')}</p>
                            </Avatar>
                        )
                    } */}
                    <div className="font-bold text-xl my-2">{mentor.name}</div>
                    <div className="mt-4 bg-purple-100 text-purple-700 text-xs uppercase font-semibold px-2 mx-8 py-1 inline-block rounded-full">
                        Mastercard Scholarship
                    </div>
                    <div className="text-primary text-sm mb-2">Google Scholarship</div>
                    <button className="bg-secondary hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded-full"
                        onClick={selectMentorHandler}
                    >
                        View {mentor.name} Profile
                    </button>
                    <div className="text-gray-700 text-base mt-3">
                        Current Mentees: 0
                    </div>
                </div>
            </div>
        </div>
    );
};



export const MentorBioCard = ({ mentor, setStep }: any) => {
    // mentor.awards = [
    //     'Mastercard Scholarship',
    //     'Google Scholarship',
    //     'Microsoft Scholarship'
    // ]

    // mentor.skills = [
    //     'React',
    //     'Node.js',
    //     'Communication',
    //     'Teamwork'
    // ]

    return (
        <div className="max-w-7xl mx-auto p-6 bg-white rounded-lg">
            <div className="flex flex-col md:flex-row">
                <div className="flex-shrink-0">
                    <img className="rounded-lg md:w-56" src={mentor?.image} alt="Mentor profile" />
                </div>
                <div className="px-8 flex flex-col justify-between">
                    <h3 className="text-xl font-bold leading-none text-gray-900 dark:text-white">{mentor?.name}</h3>
                    <p className="text-gray-500 dark:text-gray-400">{mentor?.description
                        || 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque elit, tristique placerat feugiat ac, facilisis vitae arcu. Proin eget egestas augue. Donec ut sem sed metus elementum ultrices.'
                    }</p>
                </div>
            </div>
            <div className="pt-4 pb-2 px-4 py-8">
                <span className="text-gray-500 dark:text-gray-300">Current Mentees: {mentor?.currentMentees}</span>
                {/* <div className="flex mt-1">
                    {mentor?.scholarshipAffiliation.map((skill: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | PromiseLikeOfReactNode | null | undefined, index: Key | null | undefined) => (
                        <span key={index} className="text-xs font-semibold inline-block py-1 px-2.5 uppercase rounded-full text-purple-600 bg-purple-200 last:mr-0 mr-1">
                            {skill}
                        </span>
                    ))}
                </div> */}
            </div>
        </div>
    );
};
