import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from "react-toastify"
import { useLocation } from "react-router-dom";

const DownloadArchiveLanding: FC = () => {
  const location = useLocation();
  let landingId = location.state.id_landing;
  const handleDownloadArchive = async (id_landing: number) => {
    try {
      //const landingId = 123; // Замените на актуальный идентификатор лендинга
      // Выполнение запроса на загрузку архива
      //const response = await instance.get(`/landings/archive/${id_landing}`)
      console.log('test')
      const response = await fetch(`/api/landings/archive/landing/${id_landing}`, {
        method: 'GET',
        headers: { "Content-Type": "application/zip"}
      });
      console.log('test2')
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'site_archive.zip';
      link.click();
      URL.revokeObjectURL(url);
    } catch (error: any) {
      console.error('Ошибка при загрузке архива:', error);
      toast.error(error.response?.data.message.toString())
    }
  };

  useEffect(() => {
    // Вызовите функцию handleDownloadArchive с параметром id
    handleDownloadArchive(parseInt(landingId));
  }, [landingId]);

  return null;
};

export default DownloadArchiveLanding;
