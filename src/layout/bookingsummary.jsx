
const BookingSummary = () => {
    const category = '<category>'
    const ticket = '<ticket type - variant>'
    const date = '<day>, <month> <date>'
    const subdate = 'Duration: <duration>'
    const time = '<time>'
    const subtime = 'Operating hours: <time> to <time>'
    return (
        <div className="border w-96">
            <div>
                <div className="h-48 border w-80">
                    <img src="../../public/image1.jpg"
                        className="w-full h-full rounded-lg"
                    />
                </div>


                <span className="flex items-center">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.3087 5.48563C13.2537 5.31626 13.1502 5.1668 13.0109 5.05585C12.8716 4.94491 12.7028 4.8774 12.5254 4.86172L9.15681 4.57131L7.83637 1.43131C7.76762 1.26655 7.65166 1.12581 7.50309 1.02681C7.35452 0.927822 7.17998 0.875 7.00146 0.875C6.82293 0.875 6.64839 0.927822 6.49982 1.02681C6.35125 1.12581 6.23529 1.26655 6.16654 1.43131L4.85008 4.57131L1.47752 4.86342C1.29944 4.87838 1.12974 4.94559 0.989707 5.05662C0.849671 5.16764 0.745532 5.31754 0.690348 5.48751C0.635164 5.65749 0.631392 5.83997 0.679505 6.01208C0.727618 6.18419 0.825475 6.33826 0.960803 6.45498L3.51943 8.69087L2.75258 12.0112C2.71203 12.185 2.7236 12.3669 2.78584 12.5341C2.84809 12.7013 2.95824 12.8464 3.10254 12.9514C3.24683 13.0564 3.41886 13.1164 3.59712 13.1242C3.77538 13.1319 3.95196 13.0869 4.10478 12.9948L6.99749 11.2364L9.89643 12.9948C10.0492 13.0869 10.2258 13.1319 10.4041 13.1242C10.5823 13.1164 10.7544 13.0564 10.8987 12.9514C11.043 12.8464 11.1531 12.7013 11.2154 12.5341C11.2776 12.3669 11.2892 12.185 11.2486 12.0112L10.4823 8.68746L13.0404 6.45498C13.1757 6.33786 13.2734 6.18334 13.3211 6.01087C13.3689 5.8384 13.3645 5.65566 13.3087 5.48563Z" fill="url(#paint0_linear_702_1650)" />
                        <g opacity="0.81" filter="url(#filter0_f_702_1650)">
                            <path d="M12.4441 5.76635L9.88603 7.99884C9.76153 8.10714 9.66892 8.24733 9.61815 8.40433C9.56738 8.56134 9.56037 8.72922 9.5979 8.88991L10.3664 12.216L7.46977 10.4576C7.32845 10.3716 7.16617 10.3261 7.0007 10.3261C6.83523 10.3261 6.67295 10.3716 6.53163 10.4576L3.63892 12.216L4.40236 8.89217C4.43988 8.73149 4.43288 8.56361 4.38211 8.4066C4.33134 8.2496 4.23873 8.1094 4.11423 8.00111C6.82147 8.00111 9.88603 7.45144 12.4452 5.76465V5.76862L12.4441 5.76635Z" fill="url(#paint1_radial_702_1650)" fill-opacity="0.8" />
                        </g>
                        <g filter="url(#filter1_f_702_1650)">
                            <path d="M5.46012 6.14715C4.17842 5.86935 1.63301 5.86402 1.63301 5.86402C3.36304 7.36012 6.43489 8.32556 9.30643 7.09909C9.30643 7.09909 6.74182 6.42495 5.46012 6.14715Z" fill="#FFE9E9" />
                        </g>
                        <g filter="url(#filter2_f_702_1650)">
                            <path d="M4.66908 7.82938C4.0772 7.56067 2.84457 7.29173 2.84457 7.29173C3.52617 8.19759 4.91338 8.98677 6.43292 8.69306C6.43292 8.69306 5.26097 8.09809 4.66908 7.82938Z" fill="#FF4B52" />
                        </g>
                        <g filter="url(#filter3_f_702_1650)">
                            <path d="M4.09773 10.0068C3.89194 10.6234 3.75245 11.8773 3.75245 11.8773C4.58263 11.1053 5.2235 9.64361 4.77359 8.16278C4.77359 8.16278 4.30353 9.39018 4.09773 10.0068Z" fill="#FF4B52" />
                        </g>
                        <g opacity="0.81" filter="url(#filter4_f_702_1650)">
                            <path d="M10.0902 12.3852C10.0902 12.3852 9.04233 11.6826 8.59039 11.2154C8.13844 10.7482 7.26667 9.76461 7.26667 9.76461C6.8951 8.35786 8.28015 7.38683 9.37226 7.87023C9.66814 8.01865 9.48649 8.09011 9.23537 8.29108L8.72342 9.86505C8.72342 10.844 9.89497 11.6776 10.0902 12.3852Z" fill="#FF4B52" />
                        </g>
                        <g filter="url(#filter5_f_702_1650)">
                            <path d="M3.5535 10.968C3.39427 11.3199 3.24495 12.0716 3.24495 12.0716C3.73258 11.6973 4.03031 10.8538 4.03031 9.83664C4.03031 9.83664 3.71274 10.6161 3.5535 10.968Z" fill="white" />
                        </g>
                        <g filter="url(#filter6_f_702_1650)">
                            <path d="M9.10833 11.8499C9.33387 12.0801 9.87336 12.4234 9.87336 12.4234C9.72967 11.9311 9.16364 11.4446 8.37255 11.1371C8.37255 11.1371 8.88279 11.6197 9.10833 11.8499Z" fill="white" />
                        </g>
                        <g filter="url(#filter7_f_702_1650)">
                            <path d="M6.66965 2.23629C6.8126 2.01987 6.9852 1.49176 6.9852 1.49176C6.61173 1.61231 6.32749 2.16006 6.2345 2.94427C6.2345 2.94427 6.52669 2.45272 6.66965 2.23629Z" fill="white" />
                        </g>
                        <g filter="url(#filter8_f_702_1650)">
                            <path d="M12.444 5.76635C8.31596 7.23232 5.38195 7.31877 1.55497 5.76975C1.55476 5.76806 1.55476 5.76635 1.55497 5.76465L4.92639 5.47311C5.09099 5.4586 5.24851 5.39943 5.38195 5.30197C5.51539 5.20451 5.61969 5.07247 5.6836 4.92009L7.00006 1.78406L8.31596 4.92009C8.37987 5.07247 8.48417 5.20451 8.61761 5.30197C8.75105 5.39943 8.90857 5.4586 9.07317 5.47311L12.4452 5.76465V5.76862L12.444 5.76635Z" fill="url(#paint2_linear_702_1650)" fill-opacity="0.15" />
                        </g>
                        <path d="M6.99914 10.7889L4.29675 12.8802L6.99914 11.2328L9.74423 12.8976L6.99914 10.7889Z" fill="url(#paint3_linear_702_1650)" fill-opacity="0.5" />
                        <path d="M10.0549 8.53133L11.0694 11.2459L10.4803 8.68756L12.8962 6.57559L10.0549 8.53133Z" fill="url(#paint4_linear_702_1650)" fill-opacity="0.5" />
                        <g filter="url(#filter9_f_702_1650)">
                            <path d="M8.48085 6.16587C6.04365 6.35716 7.10395 2.86253 6.77171 2.95184C6.43947 3.04115 5.96917 5.10762 5.52231 5.36299C5.07544 5.61836 3.2563 5.76199 3.2563 5.76199C3.24429 6.55811 5.27781 7.37826 8.48085 6.16587Z" fill="url(#paint5_radial_702_1650)" />
                        </g>
                        <defs>
                            <filter id="filter0_f_702_1650" x="3.05558" y="5.18132" width="9.97294" height="7.61796" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="0.291667" result="effect1_foregroundBlur_702_1650" />
                            </filter>
                            <filter id="filter1_f_702_1650" x="1.04972" y="5.28068" width="8.84001" height="2.96025" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="0.291667" result="effect1_foregroundBlur_702_1650" />
                            </filter>
                            <filter id="filter2_f_702_1650" x="2.26127" y="6.70841" width="4.75492" height="2.63041" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="0.291667" result="effect1_foregroundBlur_702_1650" />
                            </filter>
                            <filter id="filter3_f_702_1650" x="3.16911" y="7.57951" width="2.3361" height="4.88102" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="0.291667" result="effect1_foregroundBlur_702_1650" />
                            </filter>
                            <filter id="filter4_f_702_1650" x="6.62174" y="7.1613" width="4.0518" height="5.80729" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="0.291667" result="effect1_foregroundBlur_702_1650" />
                            </filter>
                            <filter id="filter5_f_702_1650" x="2.95333" y="9.545" width="1.36861" height="2.81832" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="0.145833" result="effect1_foregroundBlur_702_1650" />
                            </filter>
                            <filter id="filter6_f_702_1650" x="8.08089" y="10.8454" width="2.08419" height="1.86971" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="0.145833" result="effect1_foregroundBlur_702_1650" />
                            </filter>
                            <filter id="filter7_f_702_1650" x="6.08866" y="1.34587" width="1.0424" height="1.74418" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="0.0729167" result="effect1_foregroundBlur_702_1650" />
                            </filter>
                            <filter id="filter8_f_702_1650" x="0.388143" y="0.617391" width="13.2237" height="7.4482" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="0.583333" result="effect1_foregroundBlur_702_1650" />
                            </filter>
                            <filter id="filter9_f_702_1650" x="2.67289" y="2.36686" width="6.39128" height="4.9976" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                                <feGaussianBlur stdDeviation="0.291667" result="effect1_foregroundBlur_702_1650" />
                            </filter>
                            <linearGradient id="paint0_linear_702_1650" x1="7" y1="2.27277" x2="7" y2="13.6159" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FFBEEA" />
                                <stop offset="1" stop-color="#FF7C44" />
                            </linearGradient>
                            <radialGradient id="paint1_radial_702_1650" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.89827 8.03797) rotate(62.1049) scale(4.14419 7.26535)">
                                <stop stop-color="#FF000A" />
                                <stop offset="1" stop-color="#FF67A3" />
                            </radialGradient>
                            <linearGradient id="paint2_linear_702_1650" x1="6.99998" y1="3.60894" x2="6.99998" y2="6.89892" gradientUnits="userSpaceOnUse">
                                <stop stop-color="white" stop-opacity="0" />
                                <stop offset="1" stop-color="white" />
                            </linearGradient>
                            <linearGradient id="paint3_linear_702_1650" x1="6.9936" y1="12.0878" x2="6.9936" y2="10.7346" gradientUnits="userSpaceOnUse">
                                <stop offset="0.484375" stop-color="#BD080F" />
                                <stop offset="1" stop-color="#810000" stop-opacity="0" />
                            </linearGradient>
                            <linearGradient id="paint4_linear_702_1650" x1="10.0374" y1="8.49881" x2="11.5968" y2="9.09603" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#FF7277" />
                                <stop offset="1" stop-color="#FC000A" stop-opacity="0.04" />
                            </linearGradient>
                            <radialGradient id="paint5_radial_702_1650" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(5.54564 5.47129) rotate(48.1062) scale(1.96315 5.31516)">
                                <stop stop-color="#FFF0D9" />
                                <stop offset="1" stop-color="#FBEBD4" />
                            </radialGradient>
                        </defs>
                    </svg>
                    <h1 className="font-medium">4.9</h1>
                    <h1 className="text-[#60646C]">(4.5k)</h1>
                    <h1 className="font-medium">•</h1>
                    <h1 className="text-[#60646C]">{category}</h1>
                </span>
                <span className="text-lg font-semibold">Amsterdam open boat canal cruise - Live Guiye - from Anne Frank Housef</span>
                <div>
                    <span className="flex items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.7492 8.1625C18.0316 8.10505 18.2854 7.95182 18.4678 7.72874C18.6501 7.50566 18.7498 7.22642 18.75 6.93828V5C18.75 4.66848 18.6183 4.35054 18.3839 4.11612C18.1495 3.8817 17.8315 3.75 17.5 3.75H2.5C2.16848 3.75 1.85054 3.8817 1.61612 4.11612C1.3817 4.35054 1.25 4.66848 1.25 5V6.93828C1.25016 7.22642 1.34986 7.50566 1.53223 7.72874C1.71459 7.95182 1.96843 8.10505 2.25078 8.1625C2.67298 8.25005 3.05209 8.48044 3.32427 8.81485C3.59644 9.14926 3.74505 9.56726 3.74505 9.99844C3.74505 10.4296 3.59644 10.8476 3.32427 11.182C3.05209 11.5164 2.67298 11.7468 2.25078 11.8344C1.9679 11.8919 1.71366 12.0456 1.53124 12.2693C1.34881 12.4931 1.24944 12.773 1.25 13.0617V15C1.25 15.3315 1.3817 15.6495 1.61612 15.8839C1.85054 16.1183 2.16848 16.25 2.5 16.25H17.5C17.8315 16.25 18.1495 16.1183 18.3839 15.8839C18.6183 15.6495 18.75 15.3315 18.75 15V13.0617C18.7498 12.7736 18.6501 12.4943 18.4678 12.2713C18.2854 12.0482 18.0316 11.8949 17.7492 11.8375C17.327 11.7499 16.9479 11.5196 16.6757 11.1851C16.4036 10.8507 16.255 10.4327 16.255 10.0016C16.255 9.57039 16.4036 9.15239 16.6757 8.81798C16.9479 8.48357 17.327 8.25318 17.7492 8.16562V8.1625ZM2.5 13.0625C3.20601 12.9187 3.84064 12.5353 4.29644 11.9773C4.75224 11.4193 5.00121 10.7209 5.00121 10.0004C5.00121 9.27988 4.75224 8.5815 4.29644 8.02349C3.84064 7.46547 3.20601 7.0821 2.5 6.93828V5H6.875V15H2.5V13.0625Z" fill="#1C2024" />
                        </svg>
                        <h1 className="font-medium">{ticket}</h1>
                    </span>
                    <span>
                        <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.25 1.5H12.375V0.875C12.375 0.70924 12.3092 0.550268 12.1919 0.433058C12.0747 0.315848 11.9158 0.25 11.75 0.25C11.5842 0.25 11.4253 0.315848 11.3081 0.433058C11.1908 0.550268 11.125 0.70924 11.125 0.875V1.5H4.875V0.875C4.875 0.70924 4.80915 0.550268 4.69194 0.433058C4.57473 0.315848 4.41576 0.25 4.25 0.25C4.08424 0.25 3.92527 0.315848 3.80806 0.433058C3.69085 0.550268 3.625 0.70924 3.625 0.875V1.5H1.75C1.41848 1.5 1.10054 1.6317 0.866116 1.86612C0.631696 2.10054 0.5 2.41848 0.5 2.75V15.25C0.5 15.5815 0.631696 15.8995 0.866116 16.1339C1.10054 16.3683 1.41848 16.5 1.75 16.5H14.25C14.5815 16.5 14.8995 16.3683 15.1339 16.1339C15.3683 15.8995 15.5 15.5815 15.5 15.25V2.75C15.5 2.41848 15.3683 2.10054 15.1339 1.86612C14.8995 1.6317 14.5815 1.5 14.25 1.5ZM14.25 5.25H1.75V2.75H3.625V3.375C3.625 3.54076 3.69085 3.69973 3.80806 3.81694C3.92527 3.93415 4.08424 4 4.25 4C4.41576 4 4.57473 3.93415 4.69194 3.81694C4.80915 3.69973 4.875 3.54076 4.875 3.375V2.75H11.125V3.375C11.125 3.54076 11.1908 3.69973 11.3081 3.81694C11.4253 3.93415 11.5842 4 11.75 4C11.9158 4 12.0747 3.93415 12.1919 3.81694C12.3092 3.69973 12.375 3.54076 12.375 3.375V2.75H14.25V5.25Z" fill="#1C2024" />
                        </svg>
                        <span>
                            <h1 className="font-medium">{date}</h1>
                            <h1 className="text-[#60646C]">{subdate}</h1>
                        </span>
                    </span>
                    <span>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 1.875C8.39303 1.875 6.82214 2.35152 5.486 3.24431C4.14985 4.1371 3.10844 5.40605 2.49348 6.8907C1.87852 8.37535 1.71762 10.009 2.03112 11.5851C2.34463 13.1612 3.11846 14.6089 4.25476 15.7452C5.39106 16.8815 6.8388 17.6554 8.4149 17.9689C9.99099 18.2824 11.6247 18.1215 13.1093 17.5065C14.594 16.8916 15.8629 15.8502 16.7557 14.514C17.6485 13.1779 18.125 11.607 18.125 10C18.1227 7.84581 17.266 5.78051 15.7427 4.25727C14.2195 2.73403 12.1542 1.87727 10 1.875ZM14.375 10.625H10C9.83424 10.625 9.67527 10.5592 9.55806 10.4419C9.44085 10.3247 9.375 10.1658 9.375 10V5.625C9.375 5.45924 9.44085 5.30027 9.55806 5.18306C9.67527 5.06585 9.83424 5 10 5C10.1658 5 10.3247 5.06585 10.4419 5.18306C10.5592 5.30027 10.625 5.45924 10.625 5.625V9.375H14.375C14.5408 9.375 14.6997 9.44085 14.8169 9.55806C14.9342 9.67527 15 9.83424 15 10C15 10.1658 14.9342 10.3247 14.8169 10.4419C14.6997 10.5592 14.5408 10.625 14.375 10.625Z" fill="#1C2024" />
                        </svg>

                        <span>
                            <h1 className="font-medium">{time}</h1>
                            <h1 className="text-[#60646C]">{subtime}</h1>
                        </span>
                    </span>
                    <span className="flex items-center">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.8492 15.2835C12.9107 15.3778 12.9456 15.487 12.9502 15.5995C12.9548 15.712 12.9289 15.8236 12.8753 15.9226C12.8217 16.0216 12.7423 16.1043 12.6456 16.1619C12.5489 16.2195 12.4384 16.2499 12.3258 16.2499H0.79924C0.686659 16.2499 0.576171 16.2195 0.479451 16.1619C0.382731 16.1043 0.303369 16.0216 0.249751 15.9226C0.196133 15.8236 0.17025 15.712 0.174835 15.5995C0.179421 15.487 0.214305 15.3778 0.275803 15.2835C1.15557 13.9293 2.44962 12.8959 3.96487 12.3374C3.12721 11.7798 2.49125 10.9674 2.15104 10.0203C1.81082 9.07325 1.78441 8.04185 2.07572 7.07862C2.36702 6.1154 2.96057 5.27149 3.76859 4.67169C4.57662 4.07189 5.55621 3.74805 6.56252 3.74805C7.56883 3.74805 8.54843 4.07189 9.35645 4.67169C10.1645 5.27149 10.758 6.1154 11.0493 7.07862C11.3406 8.04185 11.3142 9.07325 10.974 10.0203C10.6338 10.9674 9.99784 11.7798 9.16018 12.3374C10.6754 12.8959 11.9695 13.9293 12.8492 15.2835ZM19.7172 15.2718C18.8372 13.9233 17.546 12.8943 16.0352 12.3374C17.0241 11.6713 17.722 10.6534 17.9868 9.49084C18.2516 8.3283 18.0635 7.10853 17.4607 6.07981C16.8578 5.0511 15.8857 4.29076 14.742 3.95357C13.5984 3.61637 12.3692 3.72766 11.3047 4.26479C11.264 4.28581 11.2284 4.31552 11.2005 4.35182C11.1725 4.38811 11.1529 4.43011 11.143 4.47483C11.1331 4.51956 11.1331 4.56592 11.1431 4.61062C11.1531 4.65533 11.1728 4.69729 11.2008 4.73354C11.9923 5.72089 12.4469 6.93576 12.498 8.20019C12.549 9.46463 12.1938 10.7122 11.4844 11.7601C11.4385 11.8286 11.4216 11.9124 11.4373 11.9933C11.4529 12.0742 11.4999 12.1457 11.568 12.1921C12.4929 12.8377 13.2847 13.6554 13.9 14.6007C14.1482 14.9808 14.2495 15.4381 14.1852 15.8874C14.1779 15.9321 14.1805 15.9779 14.1927 16.0215C14.2048 16.0651 14.2263 16.1055 14.2557 16.14C14.285 16.1745 14.3215 16.2022 14.3626 16.2212C14.4038 16.2401 14.4485 16.25 14.4938 16.2499H19.2047C19.3423 16.25 19.4761 16.2046 19.5853 16.1208C19.6945 16.0371 19.773 15.9196 19.8086 15.7867C19.8303 15.6992 19.8334 15.6082 19.8177 15.5195C19.8019 15.4308 19.7677 15.3464 19.7172 15.2718Z" fill="#1C2024" />
                        </svg>


                        <h1 className="font-medium">5 guests</h1>


                    </span>
                </div>
                <div className="border-t border-[#DDDDE3] border-dashed border-2"></div>
                <span className="flex items-center justify-between">
                    <h1 className="text-[#60646C] underline underline-offset-1">

                        View payment summary
                    </h1>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.25 7.00012C13.25 7.19903 13.171 7.3898 13.0303 7.53045C12.8897 7.6711 12.6989 7.75012 12.5 7.75012H7.75V12.5001C7.75 12.699 7.67098 12.8898 7.53033 13.0305C7.38968 13.1711 7.19891 13.2501 7 13.2501C6.80109 13.2501 6.61032 13.1711 6.46967 13.0305C6.32902 12.8898 6.25 12.699 6.25 12.5001V7.75012H1.5C1.30109 7.75012 1.11032 7.6711 0.96967 7.53045C0.829018 7.3898 0.75 7.19903 0.75 7.00012C0.75 6.80121 0.829018 6.61044 0.96967 6.46979C1.11032 6.32914 1.30109 6.25012 1.5 6.25012H6.25V1.50012C6.25 1.30121 6.32902 1.11044 6.46967 0.969792C6.61032 0.82914 6.80109 0.750122 7 0.750122C7.19891 0.750122 7.38968 0.82914 7.53033 0.969792C7.67098 1.11044 7.75 1.30121 7.75 1.50012V6.25012H12.5C12.6989 6.25012 12.8897 6.32914 13.0303 6.46979C13.171 6.61044 13.25 6.80121 13.25 7.00012Z" fill="#7E808A" />
                    </svg>

                </span>

            </div>


        </div>
    )
}

export default BookingSummary