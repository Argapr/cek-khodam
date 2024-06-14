import { useState, useEffect } from 'react';

const KodamForm = () => {
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [kodam, setKodam] = useState('');
  const [kodamList, setKodamList] = useState<string[]>([]);

  useEffect(() => {
    fetch('/data.json')
      .then((response) => response.json())
      .then((data) => setKodamList(data));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomKodam = kodamList[Math.floor(Math.random() * kodamList.length)];
    setKodam(randomKodam);
  };

  return (
    <div className="border border-[#2837ff] p-4 rounded-xl">
      <h1 className='text-[#000] font-bold text-center text-xl'>Cek Khodam</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-[#000] font-medium">Nama:</label>
          <input
            type="text"
            className="w-full px-3 py-2 border rounded outline-none text-[#000]"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-[#000] font-medium">Tanggal Lahir:</label>
          <input
            type="date"
            className="w-full px-3 py-2 border rounded outline-none text-[#000]"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-[#2837ff] text-white py-2 rounded"
        >
          Cek Khodam
        </button>
      </form>
      {kodam && (
        <div className="mt-4 p-4 bg-[#2836ff4f] border border-[#2837ff] rounded-xl">
          <p className='font-semibold'>Kodam Anda: {kodam}</p>
        </div>
      )}
    </div>
  );
};

export default KodamForm;
