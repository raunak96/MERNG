const Modal = ({
	isOpen,
	closeModal,
	callback,
	modalAction = "Delete",
	modalBody,
	modalTitle,
}) => {
	return (
		isOpen && (
			<>
				<div
					className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
					onClick={closeModal}>
					<div
						className="my-6 mx-auto w-2/5 max-w-3xl"
						onClick={e => e.stopPropagation()}>
						{/*content*/}
						<div className="rounded-lg shadow-lg flex flex-col w-full bg-white">
							{/*header*/}
							<div className="flex items-center justify-between p-5 border-b border-gray-300">
								<h3 className="text-3xl font-semibold">
									{modalTitle}
								</h3>
								<button
									className="p-1 flex items-center"
									onClick={closeModal}>
									<span className="text-black opacity-60 h-6 w-6 text-2xl block">
										×
									</span>
								</button>
							</div>
							{/*body*/}

							<p className="my-4 px-4 py-6 text-gray-500 text-lg leading-relaxed flex-1">
								{modalBody}
							</p>
							{/*footer*/}
							<div className="flex items-center justify-end p-6 border-t border-solid border-gray-200 rounded-b">
								<button
									className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="button"
									onClick={closeModal}>
									Close
								</button>
								<button
									className="bg-green-500 text-white active:bg-green-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
									type="button"
									onClick={callback}>
									{modalAction}
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="opacity-50 fixed inset-0 z-40 bg-black"></div>
			</>
		)
	);
};

export default Modal;
