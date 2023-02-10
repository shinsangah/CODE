// break / continue

for (let i = 0; i < 20; i++) {
  if (i % 2 === 1) {
    continue;
  } else {
    console.log(`${i}번 입니다.`);
  }

  if (i === 16) break;
}

// 0, 2, 4, 6 ~ 16 번까지 실행됨