/* eslint-disable no-undef */
import LikesShare from './rigthSectionComponents/LikesShare';
import NewsLetterSubscribe from './rigthSectionComponents/NewsLetterSubscribe';

export default function EngagementSection() {


    return (
        <div className="text-white space-y-4 w-full">
            <LikesShare />
            <NewsLetterSubscribe className={'max-md:hidden'} />
        </div>
    );
}
