import React, { useState } from 'react';
import Counter from './counter';

const CountersList = () => {
	const initialState = [
		{ id: 0, value: 3, name: 'Useless thing' },
		{ id: 1, value: 1, name: 'Spoon' },
		{ id: 2, value: 2, name: 'Fork' },
		{ id: 3, value: 4, name: 'Plate' },
		{ id: 4, value: 0, name: 'Minimalist set' },
	];
	const [counters, setCounters] = useState(initialState);

	const handleDelete = id => {
		const newCounters = counters.filter(counter => counter.id !== id);
		setCounters(newCounters);
	};
	const handleReset = () => {
		setCounters(initialState);
	};
	const handleIncrement = id => {
		const increment = counters.map(counter => ({
			...counter,
			value: counter.id === id ? counter.value + 1 : counter.value,
		}));
		setCounters(increment);
	};
	const handleDecrement = id => {
		const decrement = counters.map(counter => ({
			...counter,
			value: counter.id === id ? counter.value - 1 : counter.value,
		}));
		setCounters(decrement);
	};

	return (
		<>
			{counters.map(count => (
				<Counter
					key={count.id}
					onDelete={handleDelete}
					onIncrement={handleIncrement}
					onDecrement={handleDecrement}
					{...count}
				/>
			))}
			<button
				className='btn btn-outline-warning btn-sm m-2'
				onClick={handleReset}
			>
				Reset
			</button>
		</>
	);
};

export default CountersList;
