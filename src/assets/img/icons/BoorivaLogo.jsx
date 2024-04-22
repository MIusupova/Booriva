import { Link } from "react-router-dom";
import styles from "./../../../components/header/Header.module.css"
const BoorivaLogo = () => {
    return (
        <Link to="/">
            <div className = {styles.boorivaLogo}>
                <svg width="160" height="40" viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1.84086 23.9875C1.87559 23.2928 1.91033 22.7024 1.91033 22.2161C1.94506 21.3478 1.97979 20.4447 2.01453 19.5416C2.04926 18.6386 2.04926 17.4924 2.04926 16.103C2.04926 14.7484 2.01453 13.2202 1.94507 11.6224C1.8756 9.95524 1.80613 8.7743 1.7714 8.11437C1.73667 7.45444 1.6672 6.75978 1.59773 5.96091C1.52827 5.16205 1.4588 4.57158 1.42407 4.18951C1.38933 3.77271 1.31987 3.28644 1.2504 2.76544L1.18093 2.00131C1.1462 1.65398 1.25039 1.34138 1.49353 1.06351C1.73666 0.785644 2.084 0.646715 2.46606 0.611981C2.84813 0.577248 3.23019 0.681446 3.54279 0.924579C3.85539 1.16771 4.02905 1.44558 4.06379 1.82765L4.13326 2.59177C4.20272 3.11277 4.27219 3.56431 4.30692 3.94637C4.34166 4.32844 4.41112 4.95364 4.48059 5.75251C4.55006 6.55138 4.61952 7.31551 4.65426 8.04491C4.68899 8.73958 4.75846 9.88578 4.82792 11.5182C4.89739 13.2202 4.93212 14.7484 4.93212 16.1725C4.93212 17.4576 4.89739 18.6038 4.86266 19.5416C5.07106 19.3332 5.20999 19.1596 5.34892 18.9859C5.73099 18.6386 6.14779 18.2912 6.59932 17.9439C7.05086 17.5966 7.60659 17.2145 8.33599 16.7977C9.06539 16.4156 9.65585 16.103 10.1074 15.9294C10.6979 15.7557 11.4967 15.6168 12.504 15.5126C13.546 15.4431 14.3101 15.4778 14.9006 15.6168C15.4216 15.721 15.9078 15.8599 16.3941 16.0336C16.9151 16.2767 17.4708 16.6588 18.1308 17.1798C18.756 17.7355 19.277 18.2565 19.6243 18.7428C19.9716 19.2638 20.2842 19.8195 20.5274 20.41C20.8052 21.0699 21.0136 22.1814 21.1873 23.8138C21.3957 25.481 21.4304 26.662 21.361 27.3219C21.3262 28.0166 21.222 28.6418 21.0484 29.267C20.84 29.8922 20.5968 30.4826 20.319 31.0384C20.0411 31.6288 19.6243 32.254 19.1033 32.914C18.5823 33.5739 18.096 34.0949 17.6445 34.4422C17.193 34.7896 16.533 35.2064 15.63 35.7274C14.7269 36.2136 13.9975 36.5262 13.4765 36.6999C12.9902 36.8388 12.4345 36.9778 11.7398 37.082C11.1146 37.1862 10.5936 37.2556 10.1768 37.2904C9.82951 37.3251 9.48218 37.3598 9.16958 37.3946C8.78752 37.4293 8.26652 37.4293 7.60659 37.3946C6.87719 37.3598 6.28672 37.2556 5.83519 37.082L5.41839 36.9083C5.03633 36.8041 4.75845 36.561 4.58479 36.2484C4.41112 35.901 4.41113 35.5537 4.55006 35.2064C4.68899 34.859 4.93212 34.6159 5.31419 34.477C5.69625 34.338 6.04359 34.338 6.42566 34.477L6.91192 34.6506C7.08559 34.6854 7.36345 34.7201 7.74552 34.7548C8.23178 34.7548 8.61386 34.7548 8.89172 34.7548C9.16959 34.7201 9.51692 34.6854 9.89898 34.6506C10.2463 34.6159 10.6978 34.5464 11.2188 34.477C11.7746 34.3728 12.2261 34.2686 12.5734 34.1644C12.886 34.0949 13.407 33.8518 14.1364 33.4697C14.9006 33.0529 15.4216 32.7056 15.7342 32.4972C16.012 32.254 16.3594 31.872 16.7762 31.3857C17.193 30.8994 17.5056 30.4479 17.714 29.9964C17.9224 29.5796 18.0613 29.128 18.2002 28.6418C18.3044 28.1902 18.4086 27.6692 18.5128 27.1135C18.5476 26.5578 18.4781 25.5852 18.3392 24.1264C18.1308 22.6676 17.9571 21.7298 17.8182 21.313C17.6445 20.8962 17.4708 20.4794 17.2277 20.1321C16.9846 19.8195 16.6372 19.4722 16.2204 19.0901C15.7689 18.7775 15.4563 18.5344 15.2132 18.4302C14.9353 18.2912 14.6227 18.187 14.3101 18.1176C14.0322 18.0828 13.546 18.0828 12.8166 18.1176C12.0872 18.187 11.6009 18.2912 11.3231 18.3954C10.941 18.4996 10.4547 18.708 9.89898 19.0554C9.34325 19.368 8.89171 19.6806 8.57911 19.9237C8.23178 20.2016 7.84972 20.5142 7.50239 20.792C7.22452 21.0699 6.77298 21.6951 6.14778 22.6329C5.93938 22.876 5.76572 23.1192 5.62679 23.3276C5.24472 23.918 4.96686 24.3696 4.79319 24.6822C4.75846 25.099 4.72373 25.5505 4.72373 26.0368C4.61953 27.5998 4.51532 28.8502 4.41112 29.788C4.34165 30.7258 4.2722 31.4552 4.20273 31.9414C4.13326 32.4624 4.06379 33.0529 3.99433 33.7823C3.92486 34.5464 3.85539 35.0674 3.82066 35.3453C3.78593 35.6579 3.68173 36.0747 3.50806 36.5957C3.47333 36.6304 3.40386 36.6652 3.36912 36.7346C3.29966 36.8041 3.19546 36.8736 2.98706 37.0472C2.77866 37.1862 2.605 37.3251 2.43133 37.4293C2.25766 37.5335 2.04926 37.6377 1.80612 37.7072C1.56299 37.7766 1.3546 37.8114 1.18093 37.7766C1.00726 37.7419 0.833599 37.6724 0.694666 37.4988C0.555732 37.3251 0.451535 37.1167 0.382068 36.8041C0.312602 36.4915 0.277868 36.1442 0.208402 35.7621C0.138935 35.38 0.104193 34.998 0.0694602 34.6854C0.0347269 34.3033 0 33.8865 0 33.4697C0 33.0529 0.034729 32.254 0.104196 31.0731C0.173662 29.8574 0.27786 28.9544 0.416793 28.3986C0.520993 27.8429 0.65993 27.2872 0.833597 26.7662C1.00726 26.2452 1.18093 25.7242 1.42407 25.1684C1.4588 24.7169 1.63246 24.3696 1.84086 23.9875Z" fill="#1F1F1F"/>
                <path d="M40.5014 38.3338C40.2235 38.6811 39.8762 38.8895 39.4246 38.9243L38.5215 39.0285C37.7227 39.0979 36.7501 39.0632 35.5345 38.8548C34.3535 38.6464 33.2768 38.2991 32.3043 37.8823C31.4012 37.4655 30.6371 37.0139 30.0466 36.5971C29.4214 36.1109 28.6225 35.3467 27.7195 34.2005C26.8164 33.0891 26.1912 32.186 25.8786 31.4913C25.5313 30.7619 25.2534 29.5115 25.045 27.7401C24.8019 25.9687 24.7324 24.7183 24.8713 23.9542C25.045 23.2248 25.3576 22.2523 25.8439 21.0366C26.3301 19.8209 26.8859 18.7789 27.4416 17.9106C28.0321 17.077 28.5531 16.3823 29.0741 15.8961C29.5951 15.3751 30.3939 14.8193 31.5054 14.1594C32.6863 13.43 34.1104 12.9437 35.7429 12.7006C37.3406 12.4575 38.4868 12.388 39.251 12.4922C39.9804 12.5617 40.9876 12.8395 42.2727 13.3605C43.5926 13.8815 44.5652 14.3331 45.1904 14.7151C45.8156 15.0972 46.4755 15.6877 47.1701 16.4171C47.8301 17.1465 48.3511 17.8411 48.6637 18.4316C49.011 19.0568 49.3584 20.0293 49.671 21.3492C49.9488 22.6691 50.0877 23.9195 50.0877 25.0309C50.0877 26.0729 50.0183 26.9413 49.9141 27.6359C49.8446 28.3653 49.5668 29.3379 49.15 30.623C48.6984 31.9081 48.2121 32.9849 47.6564 33.8185C47.1007 34.6868 46.3366 35.4857 45.3293 36.2151C44.322 36.9792 43.5579 37.4655 43.0021 37.6739C42.5159 37.9517 41.6476 38.1601 40.5014 38.3338ZM33.4852 35.4857C33.9715 35.1731 34.423 35.0689 34.9093 35.2078L35.8471 35.5204C36.3333 35.6941 36.8543 35.7983 37.4448 35.833C38.0005 35.9025 38.7647 35.8677 39.772 35.7288C40.7792 35.5899 41.4391 35.4509 41.7865 35.312C42.1338 35.1731 42.6896 34.791 43.4537 34.2353C44.2178 33.6448 44.7736 33.0543 45.1904 32.4639C45.6419 31.8387 46.024 31.0051 46.3713 29.9283C46.7534 28.8169 46.9965 27.9485 47.1007 27.3928C47.1702 26.8023 47.2049 26.0382 47.2049 25.0657C47.2049 24.1626 47.1007 23.1206 46.8576 21.9744C46.6144 20.8629 46.3713 20.0988 46.1281 19.7167C45.885 19.2999 45.503 18.7789 44.982 18.1885C44.461 17.598 43.9747 17.1812 43.5579 16.9033C43.1411 16.6255 42.3769 16.2781 41.2655 15.8613C40.154 15.4793 39.3551 15.2361 38.8689 15.2014C38.4173 15.1319 37.549 15.1667 36.2639 15.3751C35.0482 15.5835 34.0062 15.9655 33.1726 16.4518C32.2695 17.0075 31.6096 17.4243 31.2623 17.7369C30.8802 18.119 30.4287 18.6747 29.9424 19.4041C29.4561 20.0988 29.0046 20.9671 28.5878 22.0439C28.1363 23.0859 27.8931 23.9195 27.8237 24.4752C27.7542 24.9962 27.7889 26.0035 27.9279 27.497C28.1363 29.0253 28.3447 29.9978 28.5878 30.4841C28.8309 31.0051 29.3519 31.7345 30.1508 32.707C30.9149 33.6448 31.5054 34.27 31.9222 34.6173C32.339 34.8257 32.86 35.1383 33.4852 35.4857Z" fill="#1F1F1F"/>
                <path d="M69.3619 38.3338C69.0841 38.6811 68.7367 38.8895 68.2852 38.9243L67.3821 39.0285C66.5833 39.0979 65.6107 39.0632 64.3951 38.8548C63.2141 38.6464 62.1374 38.2991 61.1649 37.8823C60.2618 37.4655 59.4977 37.0139 58.9072 36.5971C58.282 36.1109 57.4831 35.3467 56.5801 34.2005C55.677 33.0891 55.0518 32.186 54.7392 31.4913C54.3919 30.7619 54.114 29.5115 53.9056 27.7401C53.6625 25.9687 53.593 24.7183 53.7319 23.9542C53.9056 23.2248 54.2182 22.2523 54.7045 21.0366C55.1907 19.8209 55.7465 18.7789 56.3022 17.9106C56.8927 17.077 57.4137 16.3823 57.9347 15.8961C58.4557 15.3751 59.2546 14.8193 60.366 14.1594C61.547 13.43 62.971 12.9437 64.6035 12.7006C66.2012 12.4575 67.3474 12.388 68.1115 12.4922C68.8409 12.5617 69.8482 12.8395 71.1333 13.3605C72.4532 13.8815 73.4257 14.3331 74.0509 14.7151C74.6761 15.0972 75.3361 15.6877 76.0307 16.4171C76.6907 17.1465 77.2117 17.8411 77.5243 18.4316C77.8716 19.0568 78.2189 20.0293 78.5315 21.3492C78.8094 22.6691 78.9483 23.9195 78.9483 25.0309C78.9483 26.0729 78.8789 26.9413 78.7747 27.6359C78.7052 28.3653 78.4273 29.3379 78.0105 30.623C77.559 31.9081 77.0727 32.9849 76.517 33.8185C75.9613 34.6868 75.1971 35.4857 74.1899 36.2151C73.1826 36.9792 72.4185 37.4655 71.8627 37.6739C71.3765 37.9517 70.5081 38.1601 69.3619 38.3338ZM62.3458 35.4857C62.8321 35.1731 63.2836 35.0689 63.7699 35.2078L64.7077 35.5204C65.1939 35.6941 65.7149 35.7983 66.3054 35.833C66.8611 35.9025 67.6253 35.8677 68.6325 35.7288C69.6398 35.5899 70.2997 35.4509 70.6471 35.312C70.9944 35.1731 71.5501 34.791 72.3143 34.2353C73.0784 33.6448 73.6341 33.0543 74.0509 32.4639C74.5025 31.8387 74.8845 31.0051 75.2319 29.9283C75.6139 28.8169 75.8571 27.9485 75.9613 27.3928C76.0307 26.8023 76.0655 26.0382 76.0655 25.0657C76.0655 24.1626 75.9613 23.1206 75.7181 21.9744C75.475 20.8629 75.2319 20.0988 74.9887 19.7167C74.7456 19.2999 74.3635 18.7789 73.8425 18.1885C73.3215 17.598 72.8353 17.1812 72.4185 16.9033C72.0017 16.6255 71.2375 16.2781 70.1261 15.8613C69.0146 15.4793 68.2157 15.2361 67.7295 15.2014C67.2779 15.1319 66.4096 15.1667 65.1245 15.3751C63.9088 15.5835 62.8668 15.9655 62.0332 16.4518C61.1301 17.0075 60.4702 17.4243 60.1229 17.7369C59.7408 18.119 59.2893 18.6747 58.803 19.4041C58.3168 20.0988 57.8652 20.9671 57.4484 22.0439C56.9969 23.0859 56.7537 23.9195 56.6843 24.4752C56.6148 24.9962 56.6495 26.0035 56.7885 27.497C56.9969 29.0253 57.2053 29.9978 57.4484 30.4841C57.6915 31.0051 58.2125 31.7345 59.0114 32.707C59.7755 33.6448 60.366 34.27 60.7828 34.6173C61.1996 34.8257 61.7206 35.1383 62.3458 35.4857Z" fill="#1F1F1F"/>
                <path d="M85.9711 29.6852C85.9711 29.9283 85.9711 30.2062 85.9711 30.4493C86.0058 31.0745 86.0406 31.665 86.0753 32.2902C86.1101 32.9154 86.1448 33.4711 86.1448 33.9574C86.1448 34.4784 86.1101 35.0341 86.0753 35.6246V36.5971C86.0406 36.9445 85.8669 37.2571 85.5891 37.5002C85.3112 37.7433 84.9638 37.8823 84.5818 37.8475C84.1997 37.8128 83.8524 37.6739 83.5398 37.4307C83.2272 37.1529 83.123 36.8403 83.1577 36.4929V35.5899C83.1925 34.9647 83.2272 34.4437 83.2272 33.9574C83.2272 33.5059 83.1925 32.9501 83.1577 32.3944C83.123 31.8039 83.0883 31.2135 83.0535 30.5535C83.0535 29.8589 83.0188 28.6779 82.9493 26.976C82.8799 25.7256 82.8451 24.7183 82.8451 23.9542C82.8104 23.5374 82.7756 23.0511 82.7409 22.4954C82.6714 20.9671 82.6367 19.8557 82.6367 19.0915C82.6367 18.3274 82.6714 17.5633 82.7409 16.8339C82.7409 16.7991 82.7409 16.7297 82.7409 16.6602C82.7409 16.5907 82.7756 16.4518 82.8451 16.2781C82.9146 16.1045 82.9493 15.9308 83.0188 15.7571C83.0882 15.5835 83.1925 15.4445 83.3314 15.3056C83.4703 15.1667 83.6092 15.0625 83.7829 14.993C83.9566 14.9235 84.1303 14.8888 84.3734 14.9235C84.6165 14.9583 84.8597 15.0625 85.1375 15.2361C85.5891 15.514 85.8322 15.7919 85.9364 16.035C86.0406 16.2781 86.0406 16.4518 85.9017 16.5907L85.728 16.7644C85.728 17.3549 85.728 18.0495 85.728 18.8831C85.728 19.7167 85.728 20.4461 85.728 21.1408C85.728 21.8007 85.728 22.4954 85.728 23.2248C85.7627 23.3985 85.7974 23.6069 85.7974 23.8847C85.8322 24.4057 85.8669 24.7878 85.9017 25.1351C86.4227 23.9195 86.8047 23.0164 87.0826 22.4259C87.3952 21.8007 87.7425 21.2103 88.0899 20.5851C88.4372 19.9251 89.0971 18.9526 90.0002 17.6675C91.0075 16.3129 91.7021 15.4445 92.0842 15.0625C92.5705 14.6804 93.1262 14.3331 93.7514 14.0205L94.4808 13.7426C94.8281 13.5689 95.2102 13.5342 95.627 13.6731C96.0091 13.8121 96.2869 14.0205 96.4606 14.3331C96.6343 14.6457 96.6343 14.993 96.4953 15.3751C96.3564 15.7224 96.1133 16.0003 95.7659 16.1392L95.0365 16.4518C94.6892 16.5907 94.3766 16.7644 94.1335 16.9381C93.8903 17.1812 93.3346 17.9106 92.4663 19.0568C91.5979 20.3072 91.0075 21.2103 90.6949 21.766C90.3823 22.3565 90.0697 22.9122 89.7918 23.5027C89.5139 24.0931 89.0971 25.0309 88.5414 26.3161C87.8815 27.7401 87.3257 28.6779 86.8742 29.1989C86.5616 29.3726 86.2837 29.5463 85.9711 29.6852Z" fill="#1F1F1F"/>
                <path d="M104.033 37.9847C103.721 38.2278 103.373 38.332 102.991 38.332C102.609 38.332 102.262 38.1584 101.984 37.9152C101.706 37.6374 101.567 37.3595 101.567 37.0122L101.637 36.4912C101.637 36.1438 101.637 35.5534 101.637 34.7198C101.637 33.8862 101.637 33.1915 101.637 32.6705C101.637 32.1842 101.602 31.4896 101.567 30.6212C101.532 29.7182 101.463 28.6414 101.393 27.4258C101.289 26.1754 101.185 24.9944 101.116 23.883C101.046 22.7715 101.011 21.9032 100.942 21.2085C100.872 20.5138 100.803 19.8539 100.733 19.1245C100.664 18.3951 100.595 17.8741 100.56 17.5962C100.56 17.3878 100.525 17.1447 100.456 16.8668L100.386 16.3806C100.317 16.068 100.386 15.7554 100.629 15.4775C100.872 15.1649 101.185 14.9912 101.567 14.9565C101.949 14.887 102.331 14.9912 102.679 15.1996C103.026 15.408 103.2 15.6859 103.234 16.0332L103.338 16.45C103.373 16.7974 103.408 17.11 103.443 17.3878C103.443 17.631 103.512 18.1172 103.616 18.8466C103.686 19.576 103.755 20.3054 103.825 21.0001C103.894 21.6948 103.964 22.5978 104.033 23.7093C104.068 24.8208 104.137 26.0017 104.207 27.2174C104.311 28.4678 104.415 29.5445 104.45 30.4476C104.485 31.3506 104.519 32.0453 104.519 32.5663C104.519 33.0873 104.519 33.782 104.519 34.6503C104.519 35.5186 104.519 36.1438 104.519 36.4912L104.45 37.0816C104.485 37.429 104.346 37.7416 104.033 37.9847Z" fill="#1F1F1F"/>
                <path d="M108.202 14.5403C108.34 14.193 108.584 13.9498 108.931 13.8109C109.278 13.672 109.66 13.672 110.077 13.7762C110.459 13.9151 110.737 14.1235 110.911 14.4361L111.501 15.6865C111.953 16.5896 112.404 17.701 112.856 18.9862C113.307 20.1671 113.655 21.1049 113.933 21.7301C114.28 22.39 114.766 23.2931 115.357 24.4393C115.982 25.5855 116.711 26.9401 117.51 28.4336C118.309 29.9619 118.865 30.9344 119.177 31.4207C119.49 31.9417 119.802 32.428 120.08 32.8795C120.323 33.2616 120.706 33.7478 121.261 34.3036C121.365 34.4078 121.504 34.512 121.609 34.6162C121.782 34.4078 121.921 34.1646 122.095 33.9215C122.755 32.8795 123.206 32.1154 123.415 31.5944C123.658 30.9692 123.901 30.344 124.144 29.6493C124.422 28.9199 124.874 27.6348 125.499 25.7592C126.159 23.9183 126.645 22.6679 126.923 21.9732C127.201 21.2786 127.513 20.445 127.861 19.4724C128.243 18.5346 128.521 17.8747 128.694 17.4579L128.937 16.9022C129.042 16.5896 129.319 16.3464 129.667 16.2075C130.049 16.0686 130.431 16.0686 130.813 16.1728C131.195 16.3117 131.473 16.5201 131.612 16.8674C131.785 17.2148 131.785 17.5274 131.612 17.8747L131.438 18.4304C131.264 18.7778 130.987 19.4377 130.605 20.3755C130.257 21.348 129.945 22.1469 129.667 22.8068C129.424 23.4668 128.937 24.7172 128.277 26.5928C127.617 28.4684 127.131 29.7535 126.923 30.4482C126.645 31.1776 126.402 31.8375 126.159 32.4627C125.916 33.1574 125.429 34.0952 124.665 35.2761C124.63 35.3456 124.561 35.4845 124.422 35.6582C124.318 35.8318 124.214 35.9708 124.144 36.0402C124.075 36.1097 123.97 36.2486 123.832 36.457C123.693 36.6654 123.588 36.8044 123.519 36.8738C123.449 36.9433 123.311 37.0475 123.137 37.1864C122.963 37.3254 122.79 37.3948 122.651 37.4296C122.512 37.4643 122.338 37.499 122.13 37.5685C121.921 37.638 121.713 37.638 121.504 37.499C120.775 37.4296 120.011 36.9433 119.177 36.075C118.413 35.3803 117.892 34.7898 117.58 34.2341C117.267 33.7826 116.954 33.2963 116.642 32.7753C116.294 32.2196 115.704 31.1776 114.905 29.5798C114.106 28.0516 113.412 26.7317 112.752 25.5855C112.126 24.4393 111.64 23.5015 111.328 22.8416C110.98 22.1122 110.563 21.1049 110.077 19.8198C109.695 18.6041 109.278 17.5968 108.896 16.798L108.236 15.5476C108.063 15.235 108.063 14.8876 108.202 14.5403Z" fill="#1F1F1F"/>
                <path d="M158.182 32.2199H158.113C157.87 32.6019 157.661 32.9493 157.522 33.2619C157.314 33.5397 157.106 33.8523 156.862 34.1649C156.55 34.5817 155.855 35.3111 154.778 36.3184C153.702 37.3604 152.868 38.0551 152.278 38.3677C151.722 38.6803 151.166 38.9581 150.61 39.1665C150.055 39.3749 149.499 39.5486 148.943 39.7223C148.353 39.8612 147.658 39.9654 146.859 40.0001C146.06 40.0001 145.157 39.8612 144.185 39.5833C143.316 39.3055 142.657 39.0276 142.205 38.8192C141.753 38.6108 141.302 38.3677 140.85 38.0551C140.399 37.7772 139.947 37.3604 139.496 36.8741C138.975 36.2837 138.558 35.5543 138.245 34.6165C137.933 33.7481 137.759 33.0535 137.724 32.4977C137.69 31.9767 137.724 31.3863 137.829 30.6569C137.933 29.9622 138.141 29.4065 138.35 28.9202C138.558 28.3992 138.975 27.7393 139.6 26.9057C140.225 26.0373 140.781 25.4121 141.267 25.0648C141.719 24.7522 142.17 24.4396 142.691 24.1617C143.212 23.8839 143.872 23.5365 144.706 23.1892C145.609 22.8419 146.686 22.5987 147.867 22.5293C149.047 22.4251 150.02 22.4598 150.715 22.7029C151.444 22.9461 152.451 23.606 153.736 24.648C153.91 24.7869 154.049 24.9259 154.223 25.0648C153.945 24.1617 153.736 23.4323 153.563 22.9113C153.32 22.2861 152.972 21.522 152.486 20.5842C152.035 19.6811 151.618 18.9865 151.236 18.4655C150.888 17.9445 150.472 17.4929 150.055 17.1109C149.707 16.7983 149.013 16.3815 148.04 15.8952C147.033 15.4089 146.165 15.0963 145.435 14.9921C144.636 14.8532 144.011 14.7837 143.525 14.7837C143.004 14.749 142.518 14.749 142.031 14.8532C141.649 14.8532 140.885 15.0616 139.843 15.4437C139.079 15.7563 138.558 16.0341 138.28 16.2078L137.968 16.6246C137.724 16.9025 137.412 17.1109 137.03 17.1803C136.648 17.2498 136.266 17.1803 135.918 16.9719C135.571 16.7635 135.397 16.4509 135.328 16.1036C135.258 15.7563 135.328 15.4089 135.536 15.1311L135.953 14.6448C136.335 14.0891 137.273 13.5681 138.766 13.0123C140.121 12.4913 141.128 12.2482 141.788 12.2135C142.379 12.144 142.969 12.1093 143.56 12.144C144.22 12.144 145.053 12.2482 145.991 12.4219C146.998 12.5955 148.11 12.9776 149.36 13.6028C150.61 14.1933 151.548 14.749 152.139 15.27C152.694 15.791 153.215 16.3467 153.702 17.0067C154.188 17.6666 154.674 18.5002 155.195 19.5422C155.716 20.5842 156.098 21.4525 156.341 22.1472C156.585 22.8419 156.897 23.8144 157.279 25.1343C157.661 26.3499 157.974 27.2183 158.182 27.7393C158.356 28.295 158.495 28.8507 158.669 29.4065C158.842 29.9622 158.946 30.3443 159.016 30.5874C159.224 30.8653 159.155 31.2473 158.842 31.7336L158.182 32.2199ZM155.682 30.8653C155.438 30.5179 155.23 30.1706 155.022 29.8927C154.744 29.5107 154.431 29.0939 154.084 28.6423C153.736 28.2255 153.007 27.5309 151.896 26.6278C150.819 25.7595 150.124 25.2732 149.742 25.169C149.464 25.0995 148.943 25.0648 148.144 25.0995C147.276 25.169 146.547 25.3427 145.956 25.5858C145.227 25.8637 144.671 26.1415 144.289 26.3847C143.907 26.6278 143.525 26.8709 143.143 27.1141C142.865 27.3225 142.483 27.774 141.997 28.3992C141.51 29.0591 141.198 29.5107 141.059 29.8233C140.955 30.1359 140.816 30.5874 140.711 31.1084C140.642 31.5947 140.607 31.9767 140.642 32.2893C140.642 32.6019 140.746 33.0882 140.989 33.7481C141.232 34.3733 141.476 34.8249 141.753 35.1027C142.066 35.4501 142.379 35.7279 142.657 35.9016C142.934 36.0753 143.247 36.2489 143.56 36.4226C143.872 36.5963 144.428 36.7699 145.157 36.9783C145.783 37.1867 146.338 37.2909 146.825 37.2909C147.38 37.2562 147.832 37.1867 148.179 37.1173C148.561 37.0131 148.978 36.8741 149.43 36.7005C149.881 36.5268 150.298 36.3184 150.749 36.11C151.131 35.8669 151.791 35.3111 152.729 34.4428C153.667 33.5397 154.257 32.9493 154.466 32.7061C154.674 32.3935 154.848 32.0809 154.987 31.8378C155.126 31.6641 155.334 31.3168 155.682 30.8653Z" fill="#1F1F1F"/>
                <path d="M102.856 6.69182C101.571 6.13609 100.598 5.26775 99.6954 4.19102C99.3828 3.80895 97.6462 1.96809 97.9935 1.30816C98.1672 0.995557 99.105 1.16922 99.3481 1.30816C99.626 1.44709 99.9038 1.72495 100.112 1.96809C100.46 2.38489 100.703 2.87115 100.946 3.35742C101.432 4.36469 101.814 5.44142 102.474 6.34449C102.856 6.90022 103.759 6.37922 103.377 5.82349C102.405 4.43416 102.023 2.69748 100.946 1.34288C100.147 0.335616 98.5145 -0.567442 97.3683 0.439824C96.2916 1.34289 97.2988 2.73221 97.924 3.60055C99.105 5.23301 100.425 6.72655 102.3 7.56015C102.96 7.87275 103.481 6.96969 102.856 6.69182Z" fill="#1F1F1F"/>
                <path d="M98.0232 2.14146C98.8915 3.70446 100.003 5.16326 101.08 6.58733C101.496 7.10833 102.4 6.58733 101.983 6.06633C100.871 4.64226 99.7946 3.18346 98.9263 1.62046C98.5789 1.02999 97.6759 1.55099 98.0232 2.14146Z" fill="#1F1F1F"/>
                <path d="M102.605 7.66337C105.454 7.52443 108.232 6.58663 110.872 5.5099C111.74 5.16256 113.581 4.5721 113.373 3.3217C112.817 0.16097 104.377 5.23203 103.196 5.68356C102.571 5.9267 102.849 6.93397 103.474 6.69084C104.759 6.20457 105.94 5.57936 107.156 4.9889C107.92 4.60683 111.08 2.76597 111.983 3.5301C112.331 3.80797 112.088 3.80797 111.671 4.01637C111.428 4.1553 111.15 4.2595 110.872 4.39844C110.212 4.6763 109.517 4.91943 108.857 5.1973C106.843 5.9267 104.794 6.5519 102.605 6.6561C101.946 6.6561 101.911 7.6981 102.605 7.66337Z" fill="#1F1F1F"/>
                <path d="M110.979 3.66868C108.756 4.67594 106.464 5.50954 104.171 6.30841C103.546 6.51681 103.824 7.52407 104.449 7.31567C106.846 6.44734 109.208 5.57901 111.535 4.57174C112.125 4.29388 111.569 3.39081 110.979 3.66868Z" fill="#1F1F1F"/>
                </svg>
            </div>
        </Link>
    )
};
export default BoorivaLogo;