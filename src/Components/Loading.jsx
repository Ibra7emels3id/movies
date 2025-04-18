import React from 'react';

const Loading = () => {
    return (
        <div className='h-screen flex items-center justify-center'>
            <div class="flex flex-row gap-3">
                <div class="w-6 h-6 rounded-full bg-orange-600 animate-bounce"></div>
                <div class="w-6 h-6 rounded-full bg-orange-600 animate-bounce [animation-delay:-.3s]"></div>
                <div class="w-6 h-6 rounded-full bg-orange-600 animate-bounce [animation-delay:-.5s]"></div>
            </div>
        </div>
    );
}

export default Loading;
