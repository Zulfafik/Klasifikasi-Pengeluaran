function Point(val, x, y, z, distance) {
  this.val = val;
  this.x = x;
  this.y = y;
  this.z = z;
  this.distance = distance;
}

function compare(a, b) {
  if (a.distance < b.distance) {
    return -1;
  }
  if (a.distance > b.distance) {
    return 1;
  }
  return 0;
}

function classifyAPoint(arr, n, k, p) {
  for (let i = 0; i < n; i++) arr[i].distance = Math.sqrt((arr[i].x - p.x) * (arr[i].x - p.x) + (arr[i].y - p.y) * (arr[i].y - p.y) + (arr[i].z - p.z) * (arr[i].z - p.z));

  arr.sort(compare);

  let freq1 = 0;
  let freq2 = 0;

  const sorted = document.getElementById('sort');

  for (let i = 0; i < k; i++) {
    console.log(i + 1 + '/' + k);
    console.log('val: ' + arr[i].val);
    if (i != k - 1) sorted.innerHTML = sorted.innerHTML + arr[i].val + ', ';
    else sorted.innerHTML = sorted.innerHTML + arr[i].val;

    if (arr[i].val == 0) freq1++;
    else if (arr[i].val == 1) freq2++;
  }

  return freq1 > freq2 ? 'Irit' : 'Boros';
}

function main() {
  let n = 17;

  // x -> jumlah pemasukan uang saku
  // y -> Pengeluaran perbulan
  // z -> Keperluan (1=penting, 2=cukup penting, 3=tidak penting)
  // val -> klasifikasi (0=boros, 1=irit)
  let arr = [
    {
      x: 1400,
      y: 800,
      z: 1,
      val: 0,
    },

    {
      x: 1000,
      y: 700,
      z: 2,
      val: 0,
    },

    {
      x: 500,
      y: 400,
      z: 1,
      val: 0,
    },

    {
      x: 1250,
      y: 600,
      z: 3,
      val: 0,
    },

    {
      x: 500,
      y: 750,
      z: 2,
      val: 1,
    },

    {
      x: 500,
      y: 300,
      z: 2,
      val: 0,
    },

    {
      x: 800,
      y: 800,
      z: 2,
      val: 1,
    },

    {
      x: 1000,
      y: 800,
      z: 1,
      val: 0,
    },

    {
      x: 700,
      y: 700,
      z: 2,
      val: 1,
    },

    {
      x: 800,
      y: 750,
      z: 3,
      val: 1,
    },

    {
      x: 1000,
      y: 900,
      z: 1,
      val: 0,
    },

    {
      x: 800,
      y: 750,
      z: 2,
      val: 1,
    },

    {
      x: 800,
      y: 700,
      z: 1,
      val: 0,
    },

    {
      x: 1000,
      y: 1300,
      z: 3,
      val: 1,
    },

    {
      x: 700,
      y: 800,
      z: 2,
      val: 1,
    },

    {
      x: 1500,
      y: 1300,
      z: 2,
      val: 0,
    },

    {
      x: 600,
      y: 560,
      z: 2,
      val: 1,
    },

    {
      x: 1200,
      y: 1200,
      z: 3,
      val: 1,
    },

    {
      x: 800,
      y: 800,
      z: 2,
      val: 1,
    },

    {
      x: 350,
      y: 200,
      z: 1,
      val: 0,
    },

    {
      x: 650,
      y: 750,
      z: 2,
      val: 1,
    },

    {
      x: 700,
      y: 750,
      z: 2,
      val: 1,
    },
  ];

  const input_x = document.getElementById('input_x');
  const input_y = document.getElementById('input_y');
  const input_z = document.getElementById('input_z');

  let p = new Point();
  p.x = input_x.value;
  p.y = input_y.value;
  p.z = input_z.value;

  console.log('x: ' + p.x + ', y: ' + p.y + ', z: ' + p.z);

  let k = 5;

  let ans = classifyAPoint(arr, n, k, p);
  const jawaban = document.getElementById('ans');
  jawaban.innerHTML = 'Jawaban = ' + ans;
  if (ans == 'Boros') jawaban.style.backgroundColor = 'red';
  else jawaban.style.backgroundColor = 'green';

  console.log('Pengeluaran Uang Saku Termasuk' + ': ' + ans + '\n');
}
