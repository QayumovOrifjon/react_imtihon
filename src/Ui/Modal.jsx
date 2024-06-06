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
//       }, 3000); // Auto-close after 3 seconds

//       return () => clearTimeout(timer); // Cleanup the timer on component unmount
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
//           backgroundColor: 'transparent', // Transparent background
//         },
//         onClick: handleBackgroundClick, // Close modal if background is clicked
//       }}
//       style={{ position: 'absolute' }} // Ensure modal itself is absolutely positioned
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
