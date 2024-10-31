import React, {useCallback, useState} from 'react';

import {Container} from './styles';
import {ImageHome} from '../../components/ImageHome';
import {ImageHomeDetails} from '../../components/ImageHomeDetails';
import {useLoading} from '../../hooks/useLoding';

interface ItemsProps {
  name: string;
  value: string;
}

export function Home() {
  const [items, setItems] = useState<ItemsProps[]>([]);

  const {handleLoading} = useLoading();

  const handleImageRecognition = useCallback(
    async (imageUrl: string) => {
      try {
        const raw = JSON.stringify({
          user_app_id: {
            user_id: 'jlfn9yoq6xqu',
            app_id: 'aiimagereader',
          },
          inputs: [
            {
              data: {
                image: {
                  url: imageUrl,
                },
              },
            },
          ],
        });

        const requestOptions = {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            Authorization: 'Key ' + '053411bdfbe2427db68366b4fdc86f22',
          },
          body: raw,
        };

        await fetch(
          'https://api.clarifai.com/v2/models/general-image-recognition-vit/outputs',
          requestOptions,
        )
          .then(response => response.text())
          .then(result => {
            const parsed = JSON.parse(result);

            const data: ItemsProps[] = parsed.outputs[0].data.concepts.map(
              (concept: any) => ({
                name: concept.name,
                value: `${Math.round(concept.value) * 100}%`,
              }),
            );

            setItems(data);
            handleLoading(false);
          })
          .catch(() => handleLoading(false));
      } catch (error) {
        console.log(error);
      }
    },
    [handleLoading],
  );

  return (
    <Container>
      <ImageHome handleDetectImage={handleImageRecognition} />
      <ImageHomeDetails items={items} />
    </Container>
  );
}
