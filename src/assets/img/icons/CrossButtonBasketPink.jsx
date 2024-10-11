import styles from "./../../../components/mobileMenuPink/MobileMenuPink.module.sass";
const CrossButtonBasketPink = ({isMobileMenuOpen, setMobileMenuOpen}) => {
    return (
        <svg className = {styles.crossButtonBasketPink + " " + (isMobileMenuOpen && styles.backdrop_open)}
        onClick={() => setMobileMenuOpen(false)}
        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="11.5" stroke="white"/>
        <path d="M17.3143 6.6748L6.46464 17.1067" stroke="white" stroke-linecap="round"/>
        <path d="M6.67346 6.46582L17.1054 17.3155" stroke="white" stroke-linecap="round"/>
      </svg>
              
         
      )
      
  
  };
  export default CrossButtonBasketPink;