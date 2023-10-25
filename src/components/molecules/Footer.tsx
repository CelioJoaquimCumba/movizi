export const Footer = () => {
    return(
        <div className="flex py-8 px-4 flex-col justify-center items-center gap-2 bg-slate-900 w-full">
            <div className="flex justify-center items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="20" viewBox="0 0 11 20" fill="none">
                    <path d="M8.69057 3.32002H10.5V0.14003C9.62392 0.0453769 8.74365 -0.00135428 7.86285 2.98641e-05C5.24495 2.98641e-05 3.45476 1.66003 3.45476 4.70002V7.32002H0.5V10.88H3.45476V20H6.99663V10.88H9.94177L10.3845 7.32002H6.99663V5.05002C6.99663 4.00002 7.26612 3.32002 8.69057 3.32002Z" fill="white"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path d="M15.84 3.46C15.6027 3.46 15.3707 3.53038 15.1733 3.66224C14.976 3.79409 14.8222 3.98151 14.7313 4.20078C14.6405 4.42005 14.6168 4.66133 14.6631 4.89411C14.7094 5.12689 14.8236 5.34071 14.9915 5.50853C15.1593 5.67635 15.3731 5.79064 15.6059 5.83694C15.8387 5.88324 16.0799 5.85948 16.2992 5.76866C16.5185 5.67783 16.7059 5.52402 16.8378 5.32668C16.9696 5.12935 17.04 4.89734 17.04 4.66C17.04 4.34174 16.9136 4.03652 16.6885 3.81147C16.4635 3.58643 16.1583 3.46 15.84 3.46ZM20.44 5.88C20.4206 5.0503 20.2652 4.2294 19.98 3.45C19.7257 2.78313 19.33 2.17928 18.82 1.68C18.3248 1.16743 17.7196 0.774176 17.05 0.53C16.2727 0.236161 15.4508 0.07721 14.62 0.0599999C13.56 -5.58794e-08 13.22 0 10.5 0C7.78 0 7.44 -5.58794e-08 6.38 0.0599999C5.54915 0.07721 4.72734 0.236161 3.95 0.53C3.28168 0.776649 2.67693 1.16956 2.18 1.68C1.66743 2.17518 1.27418 2.78044 1.03 3.45C0.736161 4.22734 0.57721 5.04915 0.56 5.88C0.5 6.94 0.5 7.28 0.5 10C0.5 12.72 0.5 13.06 0.56 14.12C0.57721 14.9508 0.736161 15.7727 1.03 16.55C1.27418 17.2196 1.66743 17.8248 2.18 18.32C2.67693 18.8304 3.28168 19.2234 3.95 19.47C4.72734 19.7638 5.54915 19.9228 6.38 19.94C7.44 20 7.78 20 10.5 20C13.22 20 13.56 20 14.62 19.94C15.4508 19.9228 16.2727 19.7638 17.05 19.47C17.7196 19.2258 18.3248 18.8326 18.82 18.32C19.3322 17.8226 19.7283 17.2182 19.98 16.55C20.2652 15.7706 20.4206 14.9497 20.44 14.12C20.44 13.06 20.5 12.72 20.5 10C20.5 7.28 20.5 6.94 20.44 5.88ZM18.64 14C18.6327 14.6348 18.5178 15.2637 18.3 15.86C18.1403 16.2952 17.8839 16.6884 17.55 17.01C17.2256 17.3405 16.8332 17.5964 16.4 17.76C15.8037 17.9778 15.1748 18.0927 14.54 18.1C13.54 18.15 13.17 18.16 10.54 18.16C7.91 18.16 7.54 18.16 6.54 18.1C5.88089 18.1123 5.22459 18.0109 4.6 17.8C4.18578 17.6281 3.81136 17.3728 3.5 17.05C3.16809 16.7287 2.91484 16.3352 2.76 15.9C2.51586 15.2952 2.38044 14.6519 2.36 14C2.36 13 2.3 12.63 2.3 10C2.3 7.37 2.3 7 2.36 6C2.36448 5.35106 2.48295 4.70795 2.71 4.1C2.88605 3.67791 3.15627 3.30166 3.5 3C3.80381 2.65617 4.17929 2.3831 4.6 2.2C5.20955 1.98004 5.852 1.86508 6.5 1.86C7.5 1.86 7.87 1.8 10.5 1.8C13.13 1.8 13.5 1.8 14.5 1.86C15.1348 1.86728 15.7637 1.98225 16.36 2.2C16.8144 2.36865 17.2223 2.64285 17.55 3C17.8777 3.30718 18.1338 3.68273 18.3 4.1C18.5223 4.70893 18.6373 5.35178 18.64 6C18.69 7 18.7 7.37 18.7 10C18.7 12.63 18.69 13 18.64 14ZM10.5 4.87C9.48581 4.87198 8.49496 5.17453 7.65265 5.73942C6.81035 6.30431 6.15438 7.1062 5.76763 8.04375C5.38089 8.98131 5.28072 10.0125 5.47979 11.0069C5.67886 12.0014 6.16824 12.9145 6.88608 13.631C7.60392 14.3474 8.51801 14.835 9.51286 15.0321C10.5077 15.2293 11.5387 15.1271 12.4755 14.7385C13.4123 14.35 14.2129 13.6924 14.7761 12.849C15.3394 12.0056 15.64 11.0142 15.64 10C15.6413 9.3251 15.5092 8.65661 15.2512 8.03296C14.9933 7.40931 14.6146 6.84281 14.1369 6.36605C13.6592 5.88929 13.0919 5.51168 12.4678 5.25493C11.8436 4.99818 11.1749 4.86736 10.5 4.87ZM10.5 13.33C9.84139 13.33 9.19757 13.1347 8.64995 12.7688C8.10234 12.4029 7.67552 11.8828 7.42348 11.2743C7.17144 10.6659 7.1055 9.99631 7.23398 9.35035C7.36247 8.70439 7.67963 8.11104 8.14533 7.64533C8.61104 7.17963 9.20439 6.86247 9.85035 6.73398C10.4963 6.6055 11.1659 6.67144 11.7743 6.92348C12.3828 7.17552 12.9029 7.60234 13.2688 8.14995C13.6347 8.69757 13.83 9.34139 13.83 10C13.83 10.4373 13.7439 10.8703 13.5765 11.2743C13.4092 11.6784 13.1639 12.0454 12.8547 12.3547C12.5454 12.6639 12.1784 12.9092 11.7743 13.0765C11.3703 13.2439 10.9373 13.33 10.5 13.33Z" fill="white"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 21 20" fill="none">
                    <path d="M15.1687 12.01C14.9678 11.9101 13.6617 11.3109 13.4607 11.211C13.2598 11.1111 13.0588 11.1111 12.8579 11.3109C12.657 11.5106 12.2551 12.1099 12.0541 12.3096C11.9537 12.5094 11.7527 12.5094 11.5518 12.4095C10.8485 12.1099 10.1452 11.7104 9.54237 11.211C9.04002 10.7116 8.53766 10.1124 8.13578 9.51311C8.03531 9.31336 8.13578 9.11361 8.23625 9.01373C8.33672 8.91386 8.43719 8.71411 8.63813 8.61423C8.7386 8.51436 8.83907 8.31461 8.83907 8.21473C8.93954 8.11486 8.93954 7.91511 8.83907 7.81523C8.7386 7.71536 8.23625 6.51685 8.03531 6.01748C7.93484 5.31835 7.7339 5.31835 7.53295 5.31835H7.0306C6.82966 5.31835 6.52825 5.5181 6.42778 5.61798C5.82495 6.21723 5.52354 6.91635 5.52354 7.71536C5.62401 8.61423 5.92542 9.51311 6.52825 10.3121C7.63342 11.9101 9.04002 13.2085 10.748 14.0075C11.2504 14.2072 11.6523 14.407 12.1546 14.5069C12.657 14.7066 13.1593 14.7066 13.7621 14.6067C14.4654 14.5069 15.0683 14.0075 15.4701 13.4082C15.6711 13.0087 15.6711 12.6092 15.5706 12.2097L15.1687 12.01ZM17.6805 2.92135C13.7621 -0.973783 7.43248 -0.973783 3.51412 2.92135C0.299058 6.11735 -0.303766 11.0112 1.90659 14.9064L0.5 20L5.82495 18.6017C7.33201 19.4007 8.93954 19.8002 10.5471 19.8002C16.073 19.8002 20.4937 15.4057 20.4937 9.91261C20.5942 7.31585 19.489 4.81898 17.6805 2.92135ZM14.9678 16.9039C13.6617 17.7029 12.1546 18.2022 10.5471 18.2022C9.04002 18.2022 7.63342 17.8027 6.3273 17.1036L6.02589 16.9039L2.9113 17.7029L3.71506 14.7066L3.51412 14.407C1.10282 10.412 2.30847 5.41823 6.22683 2.92135C10.1452 0.42447 15.1687 1.72285 17.58 5.5181C19.9913 9.41323 18.8862 14.5069 14.9678 16.9039Z" fill="white"/>
                </svg>
            </div>
            <span className="text-xs leading-4 font-normal text-white text-center">@2023 movizi, Inc. All rights reserved.</span>
        </div>
    )
}