import { useRecoilState } from 'recoil';
import { commitsAtom } from '../recoil/commits';
import { Commit } from '../recoil/types';
import { saveCommitsToStorage } from '../utils/commitStorage';

export const useCommits = () => {
  const [commits, setCommits] = useRecoilState(commitsAtom);

  const addCommit = (newCommit: Commit) => {
    const updated = [...commits, newCommit];
    setCommits(updated);
    saveCommitsToStorage(updated);
  };

  const deleteCommit = (id: string) => {
    const updated = commits.filter(commit => commit.id !== id);
    setCommits(updated);
    saveCommitsToStorage(updated);
  };

  const resetCommits = () => {
    setCommits([]);
    saveCommitsToStorage([]);
  };

  return { commits, addCommit, deleteCommit, resetCommits };
};
