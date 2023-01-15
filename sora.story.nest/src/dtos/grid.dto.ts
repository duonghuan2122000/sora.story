/**
 * Dto req phân trang
 */
export class RequestPagedDto {
  /**
   * số bản ghi sẽ lấy
   */
  maxResultCount: number | 20;

  /**
   * Vị trí bản ghi bắt đầu
   */
  skipCount: number | 0;
}

export class RequestPagedWithFilterDto extends RequestPagedDto {
  /**
   * Điều kiện lọc
   */
  filter: string | null;
}

/**
 * Dto res phân trang
 */
export class ResponsePagedDto<T> {
  /**
   * Tổng số bản ghi
   */
  totalRecord: number | 0;

  /**
   * Danh sách bản ghi phân trang
   */
  items: T[];
}
