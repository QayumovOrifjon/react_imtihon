// import React, { useEffect } from 'react';
// import Modal from '@mui/material/Modal';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { useBadgeContext } from '../components/context/Context';

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   boxShadow: 5,
//   p: 4,
//   zIndex: 10,
// };

// const BadgeModal = () => {
//   const { isModalOpen, handleCloseModal } = useBadgeContext();

//   useEffect(() => {
//     if (isModalOpen) {
//       const timer = setTimeout(() => {
//         handleCloseModal();
//       }, 3000);

//       return () => clearTimeout(timer);
//     }
//   }, [isModalOpen, handleCloseModal]);

//   const handleBackgroundClick = () => {
//     handleCloseModal();
//   };

//   return (
//     <Modal
//       open={isModalOpen}
//       onClose={handleCloseModal}
//       BackdropProps={{
//         style: {
//           backgroundColor: 'transparent',
//         },
//         onClick: handleBackgroundClick,
//       }}
//       style={{ position: 'absolute' }}
//     >
//       <Box sx={style}>
//         <Typography variant="h6" component="h2">
//           Siz buni qo'shgansiz!
//           Cartlarni tekshiring
//         </Typography>
//       </Box>
//     </Modal>
//   );
// };

// export default BadgeModal;

// bu modal hoomeda cardni bir marta bosgandan (cardga qowganda ) kn yana bossa chiqar edi oldin bosganligini eslatib
