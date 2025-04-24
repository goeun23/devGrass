export const getCommitColor = (count) => {
    if (count === 0)
        return 'bg-gray-200';
    if (count === 1)
        return 'bg-green-200';
    if (count === 2)
        return 'bg-green-400';
    if (count === 3)
        return 'bg-green-600';
    return 'bg-green-800';
};
