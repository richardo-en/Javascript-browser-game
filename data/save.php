$data = file_get_contents('php://input');

$data = json_decode($data, true);

$data = json_encode($data);

$file = 'settings.json';
file_put_contents($file, $data);

echo "Data saved successfully";
